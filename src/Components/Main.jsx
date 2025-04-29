import midAndlg from '../assets/main_Image_desktop.png';
import small from '../assets/main_Image_mobile.png';

function Main() {
    return (
    <div className="container-fluid mt-5">

      <picture className='d-flex'>
        <source media="(max-width: 750px)" srcSet={small} />
        <img
          className="col-12 col-lg-11 mx-auto"
          src={midAndlg}
          alt="main image"
          loading="lazy"
        />
      </picture>

    </div>
 )
}

export default Main;