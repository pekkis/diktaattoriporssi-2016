import { connect } from 'react-redux';
import DictatorPage from '../DictatorPage';

export default connect(
    state => ({
        dictators: state.dictator.get('dictators'),
    })
)(DictatorPage);
