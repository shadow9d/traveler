import React, { Component } from 'react';
import {Button,toaster,Pane} from 'evergreen-ui'

class Timepass extends Component {
    state = {  }
    render() { 
        return ( 
            <Pane
            
            alignItems="center"
            width={'100%'}
            height={'100%'}
            justifyContent="center"
            
            >
                <Button
                    onClick={() =>
                        toaster.success(
                            'Nae kaj to khoi baj'
                        )
                    }
                >
                    DONT PRESS ME
                </Button>
            </Pane>
         );
    }
}
 
export default Timepass;
