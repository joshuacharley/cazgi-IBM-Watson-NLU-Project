import React from 'react';
import './bootstrap.min.css';
import { func } from 'prop-types';

class EmotionTable extends React.Component {
    render() {
      return (  
        <div>
          {/*You can remove this line and the line below. */}
          {JSON.stringify(this.props.emotions)}
          <table className="table table-bordered">
            <tbody>
            {
                //Write code to use the .map method that you worked on in the Hands-on React lab to extract the emotions
                this.state.sentimentOutput.map(function(emotions){
                    return <td>{emotions}</td>
                })
            }
            </tbody>
          </table>
          </div>
          );
        }
    
}
export default EmotionTable;
