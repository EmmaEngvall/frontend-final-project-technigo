import React from 'react';
// import { StyledMainWrapper } from 'styled/LoginStyled';
import imgVarberg from '../images/article_Varberg.jpg';
import imgLofoten from '../images/article_Lofoten.jpg';
import imgCornwall from '../images/article_Cornwall.jpg';
import imgBH from '../images/article_BH.jpg';

const SingleArticle = () => {
  return (
    <>
      <h2>More inspiration...</h2>
      <div className="Article">
        <h2>A surf summer in Varberg</h2>
        <p>Sweden&apos;s Surfers Paradise...where you can boardsurf, kite, windsurf...
          laidback lifestyle.
        </p>
        <img src={imgVarberg} alt="Beach in Varberg" />
      </div>
      <div className="Article">
        <h2>Cold but beautiful, surfing adventure in Lofoten</h2>
        <p>A couple of hours outside...</p>
        <img src={imgLofoten} alt="Surfers in dry suits" />
      </div>
      <div className="Article">
        <h2>Beautiful Cornwall, not just pasture</h2>
        <p>To not only go for the stunning nature but also for the excellent surf. Beaches may..</p>
        <img src={imgCornwall} alt="Cliffs and ocean in Cornwall" />
      </div>
      <div className="Article">
        <h2>Burleigh Heads</h2>
        <p>If you have made it all the way here you will not be disappointed.</p>
        <img src={imgBH} alt="Surfers waiting for waves at Burleigh Heads" />
      </div>
    </>
  )
}

export default SingleArticle

// Add weather forecast for destination?