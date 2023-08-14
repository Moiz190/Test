
import '../../styles/BrandHeader.css'
export const BrandHeader = () => {
  return (
    <nav className="BrandNav flex justify-between">
        <h2 className='text-white'>Brand Header</h2>
        <ul className="BrandHeader text-white flex items-center gap-4">
            <li>Home</li>
            <li>Portfolio</li>
            <li>Contact Us</li>
            <li>Services</li>
            <li>About Us</li>
        </ul>
    </nav>
  )
}
export default BrandHeader