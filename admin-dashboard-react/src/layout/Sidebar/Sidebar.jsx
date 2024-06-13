import './sidebar.css';
import { personsImgs } from '../../utils/images';

const Sidebar = () => {
  return (
    <div className={`sidebar`}>
      <div className="user-info">
        <div className="info-img img-fit-cover">
          <img src={personsImgs.person_three} alt="profileImage" />
        </div>
        <span className="info-name">Radha Krishna</span>
      </div>
      <nav className="navigation">
        <ul className="nav-list">
            {
                
            }
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
