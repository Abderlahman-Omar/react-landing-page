import "./PixelGrade.css"
import pixelImage from "../../assets/Pixel-Grade/Frame 35.svg"
export default function PixelGrade() {
  return (
    <div className='pixel-container'>
      <img src={pixelImage} alt="" />
      <div className="pixel-text-container">
        <p className='pixel-first-text'>The unseen of spending three years at Pixelgrade</p>
        <p className='pixel-second-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
        <button>
          Learn More
        </button>
      </div>
    </div>  
  )
}
