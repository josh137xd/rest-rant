const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <div>
                <img src="/images/404-img.jpg" alt="404 img" />
                </div>
               <div>
                Photo by <a href="https://unsplash.com/@timmossholder?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Tim Mossholder</a> on <a href="https://unsplash.com/photos/jicxB6ooyeU?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                 </div>
                 <p>Oops, sorry, we can't find this page!</p>
          </main>
      </Def>
    )
  }
  
module.exports = error404
