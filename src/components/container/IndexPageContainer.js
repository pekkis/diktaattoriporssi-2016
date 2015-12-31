import { connect } from 'react-redux';
import IndexPage from '../IndexPage';


function mapStateToProps(state) {
    return {
        dictators: state.dictator.get('dictators'),
    };
}

function mapDispatchToProps(dispatch) {
    return {
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(IndexPage);
