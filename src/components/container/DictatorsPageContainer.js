import { connect } from 'react-redux';
import DictatorsPage from '../DictatorsPage';

export default connect(
    state => ({
        dictators: state.dictator.get('dictators'),
    })
)(DictatorsPage);
