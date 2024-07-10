pipeline {
    agent any

    environment {
        GITHUB_PAT = credentials('github-credentials')
        DOCKERHUB_USERNAME = "walabr"
        STAGING_TAG = "${DOCKERHUB_USERNAME}/frontend-khaled:staging"
        PROD_TAG = "${DOCKERHUB_USERNAME}/frontend-khaled:prod"
        DEV_TAG = "${DOCKERHUB_USERNAME}/frontend-khaled:dev"
    }

    parameters {
        string(name: 'BRANCH_NAME', defaultValue: 'main', description: 'Nom de la branche Git')
        string(name: 'CHANGE_ID', defaultValue: '', description: 'ID de changement Git pour les demandes de fusion')
        string(name: 'CHANGE_TARGET', defaultValue: '', description: 'ID de changement Git pour les demandes de fusion cible')
    }

    stages {
        stage('Set Branch Name') {
            steps {
                script {
                    branchName = params.BRANCH_NAME
                    targetBranch = branchName
                    echo "Nom de la branche actuelle : ${branchName}"
                    echo "Nom de la branche cible : ${targetBranch}"
                }
            }
        }

        stage('Checkout Git repository') {
            steps {
                script {
                    checkout([
                        $class: 'GitSCM',
                        branches: [[name: "*/${params.BRANCH_NAME}"]],
                        doGenerateSubmoduleConfigurations: false,
                        extensions: [],
                        userRemoteConfigs: [[
                            url: 'https://github.com/WalaBenRhoumaa/KhaledJuniorClient',
                            credentialsId: 'github-credentials'
                        ]]
                    ])
                }
            }
        }

        stage('Clean Build') {
            steps {
                echo 'Nettoyage du Build...'
                sh 'rm -rf node_modules'
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installation des dépendances...'
                nodejs('NodeJS') {
                    sh 'npm install --legacy-peer-deps'
                }
            }
        }

        stage('Build Docker') {
            when {
                expression {
                    (params.CHANGE_ID != null) && (targetBranch in ['DEVOPS', 'main', 'staging'])
                }
            }
            steps {
                script {
                    def dockerTag
                    if (targetBranch == 'staging') {
                        dockerTag = STAGING_TAG
                    } else if (targetBranch == 'main') {
                        dockerTag = PROD_TAG
                    } else if (targetBranch == 'DEVOPS') {
                        dockerTag = DEV_TAG
                    } else {
                        error "Branch '${targetBranch}' not supported for Docker build."
                    }

                    sh "docker build -t ${dockerTag} ."
                }
            }
        }

        stage('Docker Login') {
            when {
                expression {
                    (params.CHANGE_ID != null) && ((targetBranch == 'DEVOPS') || (targetBranch == 'main') || (targetBranch == 'staging'))
                }
            }
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockeer', usernameVariable: 'DOCKERHUB_USERNAME', passwordVariable: 'DOCKERHUB_PASSWORD')]) {
                    sh "docker login -u ${DOCKERHUB_USERNAME} -p ${DOCKERHUB_PASSWORD}"
                }
            }
        }

        stage('Docker Push') {
            when {
                expression {
                    (params.CHANGE_ID != null) && ((targetBranch == 'DEVOPS') || (targetBranch == 'main') || (targetBranch == 'staging'))
                }
            }
            steps {
                sh "docker push ${DOCKERHUB_USERNAME}/frontend-khaled --all-tags"
            }
        }

        stage('Remove Containers') {
            when {
                expression {
                    (params.CHANGE_ID != null) && ((targetBranch == 'DEVOPS') || (targetBranch == 'main') || (targetBranch == 'staging'))
                }
            }
            steps {
                sh '''
                container_ids=$(docker ps -q --filter "publish=6665/tcp")
                if [ -n "$container_ids" ]; then
                    echo "Stopping and removing containers..."
                    docker stop $container_ids
                    docker rm $container_ids
                else
                    echo "No containers found using port 6665."
                fi
                '''
            }
        }

        stage('Deploy to Prod') {
            when {
                expression {
                    (params.CHANGE_ID != null) && (targetBranch == 'main')
                }
            }
            steps {
                sh "sudo ansible-playbook ansible/k8s.yml -i ansible/inventory/host.yml"
            }
        }

        stage('Pipeline Finished') {
            steps {
                echo 'Pipeline terminé.'
            }
        }
    }

    post {
        success {
            echo 'Build et tests terminés avec succès !'
        }
        failure {
            echo 'Le build ou les tests ont échoué.'
            archiveArtifacts artifacts: '/target/.log', allowEmptyArchive: true
        }
    }
}