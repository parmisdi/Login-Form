import Avatar from './avatar.js';
import UserName from './userName.js';

export default Document

function Document() {
    return (
      <div className="Wrapper">
        <div className="document">
          <div className="content">
            <Avatar />
            <UserName />
          </div>
        </div>
          <div id="submited"></div>
      </div>
    );
  }