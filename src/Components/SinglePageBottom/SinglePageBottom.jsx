import React from 'react';
import './SinglePageBottom.css';
import { NavLink } from 'react-router-dom';
import SinglePageBottomCard from '../SinglePageBottomCard/SinglePageBottomCard';

const SinglePageBottom = () => {
  return (
    <div className="single-page-bottom">
      <div className="description-section">
        <div className="tabs">
          <NavLink className="tab active">Product Description</NavLink>
          <NavLink className="tab">Reviews (19)</NavLink>
        </div>
        <div className="description-content">
          <p>
            The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.
          </p>
          <p>
            Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget velit. Donec ac tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, lorem at placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi. Cras neque metus, consequat et blandit et, luctus a nunc. Etiam gravida vehicula tellus, in imperdiet ligula euismod eget.
          </p>
          <div className="room-info">
            <h4>Living Room:</h4>
            <p>
              The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <h4>Dining Room:</h4>
            <p>
              The benefits of houseplants are endless. In addition to cleaning the air of harmful toxins, they can help to improve your mood, reduce stress and provide you with better sleep. Fill every room of your home with houseplants and their restorative qualities will improve your life.
            </p>
            <h4>Office:</h4>
            <p>
              The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
      <SinglePageBottomCard />
    </div>
  );
};

export default SinglePageBottom;
