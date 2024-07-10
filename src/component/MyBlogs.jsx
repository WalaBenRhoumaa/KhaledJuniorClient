import React from 'react'
import "../../public/css/blogs.css"; 
import { Link } from 'react-router-dom';

function MyBlogs() {
  return (
    <section id="blogs" className="blogs-section">
      <div className="container text-center">
        <div className="heading-content text-center">
          <Link to="services.html">
            <h1
              id="blogs-title"
              className="lang"
              data-lang-en="paragraph6"
              data-lang-es="paragraph6"
              data-lang-fr="paragraph6"
              data-lang-ar="paragraph6"
              data-lang-pt="paragraph6"
            >
              Blogs
            </h1>
          </Link>
        </div>
        <div className="blogs-container">
          <div className="blog-content">
            <h2>Title</h2>
            <div className="content-details scrollbar2">
              blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah...
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus sequi distinctio ratione? Voluptate nesciunt id eos deserunt unde asperiores ducimus!
              Sint, ad. Molestiae reiciendis aut accusamus alias sapiente rem ducimus. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam nobis nostrum
              accusamus obcaecati itaque. Voluptates labore omnis quod necessitatibus architecto, minima excepturi quaerat numquam commodi consequatur culpa sint tempore
              aliquam? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam iure quibusdam aliquam dignissimos sequi sapiente? Vel, iste. Temporibus distinctio
              unde atque illo, cumque quaerat nostrum sed blanditiis maiores repudiandae. Ea Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil labore iste velit
              aut obcaecati accusantium! Maxime modi vel nobis, dolorum voluptate odit voluptatibus ad earum totam eius mollitia exercitationem temporibus! Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Quae, voluptas. Voluptatum, repell...
            </div>
          </div>
          <div className="blog-content">
            <h2>Title</h2>
            <div className="content-details scrollbar2">
              blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah...
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus sequi distinctio ratione? Voluptate nesciunt id eos deserunt unde asperiores ducimus!
              Sint, ad. Molestiae reiciendis aut accusamus alias sapiente rem ducimus. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam nobis nostrum
              accusamus obcaecati itaque. Voluptates labore omnis quod necessitatibus architecto, minima excepturi quaerat numquam commodi consequatur culpa sint tempore
              aliquam? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam iure quibusdam aliquam dignissimos sequi sapiente? Vel, iste. Temporibus distinctio
              unde atque illo, cumque quaerat nostrum sed blanditiis maiores repudiandae. Ea Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil labore iste velit
              aut obcaecati accusantium! Maxime modi vel nobis, dolorum voluptate odit voluptatibus ad earum totam eius mollitia exercitationem temporibus! Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Quae, voluptas. Voluptatum, repell...
            </div>
          </div>
        </div>
      </div>
      <a href="#contact">
            <div className="blog-arrows">
                <div className="body-arrows">
                    <div className="arrows"></div>
                </div>
            </div>
        </a>
    </section>
  )
}

export default MyBlogs;
