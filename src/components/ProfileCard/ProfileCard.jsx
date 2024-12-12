import PropTypes from 'prop-types';
import './ProfileCard.css';

export const ProfileCard = ({ title, image, description, href = '' }) => {

    return (
        <div className="container my-5">
            <div className="card col-6 m-auto p-3">
                <div className="card-body">
                    <h2 className="text-center">{title}</h2>
                    <hr />
                    <div className="text-center">
                        <img src={image} alt="" className="photo-profile" />
                    </div>
                    <hr />
                    <p>
                        {description}
                    </p>

                    <div className='text-center mt-4'>
                        <a href={href} target='_blank' className='btn btn-outline-light'>
                            Más información
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

ProfileCard.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
    href: PropTypes.string,
};

export default ProfileCard