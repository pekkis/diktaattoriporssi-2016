import { connect } from 'react-redux';
import PropagandaPage from '../PropagandaPage';

import { bindActionCreators } from 'redux';
import { setAdisMood } from '../../actions/dictator-actions';


function mapStateToProps(state) {
    return {
        dictators: state.dictator.get('dictators'),
        adi: state.dictator.get('adi'),
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        setAdisMood
    }, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PropagandaPage);
