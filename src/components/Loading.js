import React from 'react';
import './Loading.css';

const Loading = (props) => {
  const { width, height } = props;
  return (
    <tbody>
      <tr>
        <td>
          <div className='Loading' style={{ width, height }} />;
        </td>
      </tr>
    </tbody>
  );
};

Loading.defaultProps = {
  width: '200px',
  height: '200px',
};

export default Loading;
