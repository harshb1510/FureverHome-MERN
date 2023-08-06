import './feature.css'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ReportIcon from '@mui/icons-material/Report';
import HowToRegIcon from '@mui/icons-material/HowToReg';


const Feature = () => {
  return (
    <section>

    <div className='featureContainer'>
        <div className="featureLeft">
            <FavoriteIcon className='featureIcon1' style={{width:"50px"}} />
            <span className='featureHeading'>
                <h3 className='featureTitle'>
                    Adopt
                </h3>
            </span>
            <span className='featureHeading'>
                <p>
                "Adopt a furry friend and find unconditional love for life!"
                </p>
            </span>
        </div>
        <div className="featureCenter">
            <ReportIcon className='featureIcon2'  />
            <span className='featureHeading'>
                <h3 className='featureTitle'>
                    Report
                </h3>
            </span>
            <span className='featureHeading'>
                <p>
                "Speak up for those who can't - report animal abuse or neglect today."
                </p>
            </span>
        </div>
        <div className="featureRight">
            <HowToRegIcon className='featureIcon3' />
            <span className='featureHeading'>
                <h3 className='featureTitle'>
                    Register
                </h3>
            </span>
            <span className='featureHeading'>
                <p>
                "Help a furry friend find a forever home - consider putting them up for adoption today!"
                </p>
            </span>
        </div>
    </div>
    </section>
  )
}
export default Feature
