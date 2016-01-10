import { connect } from 'react-redux';
import App from '../App';
import { bindActionCreators } from 'redux';
import { setAdisMood } from '../../actions/dictator-actions';

function mapStateToProps(state) {
    return {
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
)(App);
