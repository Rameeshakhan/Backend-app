import flowerposter from "./images/flowerposter.png"


const Home = () => {
  
  return (
    <>
      <div className='wallpaper'>
        {/* <button>hello</button> */}
        <div className='main'>
          <h1 className='home-heading'>Discover the Beauty and Meaning Behind <br />
            the Language of Flowers
            of Different <br />
            kinds through my imagination<br /> and personal perspective
            <br />
            <h3 >Let's Go ...</h3></h1>
          <button className='read-more'>Read More</button>
        </div>
      </div>
      <div className='main-container'>
      <div className='para-section'>
        <h1 className='flower'>Flowers</h1>
        <hr />
        <p className='flower-para'>
          Flowers are one of nature's most beautiful creations, and they have been admired and celebrated for centuries. Whether in gardens, meadows, or forests, flowers are a symbol of life, renewal, and growth. They come in a seemingly endless variety of colors, shapes, and sizes, and each type of flower has its own unique beauty and charm. Flowers not only enhance the aesthetic appeal of our surroundings but also have a profound effect on our mood and emotions. They can uplift our spirits, convey our feelings, and bring joy to our lives. From weddings to funerals, flowers play an important role in our cultural and social traditions. Overall, flowers are a testament to the beauty and wonder of the natural world, and they inspire us to appreciate the simple pleasures of life.
        </p>
      </div>
     
<div className="flowerposter">
  <img src={flowerposter} alt=""/>
  
</div>
      </div>
    </>
  )
}

export default Home