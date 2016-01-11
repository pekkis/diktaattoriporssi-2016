import { connect } from 'react-redux';
import IndexPage from '../IndexPage';

import { bindActionCreators } from 'redux';
import { setAdisMood } from '../../actions/dictator-actions';


function mapStateToProps(state) {
    return {
        dictators: state.dictator.get('dictators'),
        adi: state.dictator.get('adi'),
        gallery: state.dictator.get('gallery'),
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
)(IndexPage);
