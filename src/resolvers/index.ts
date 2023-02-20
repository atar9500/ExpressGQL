import authorResolvers from './authorResolvers';
import noteResolvers from './noteResolvers';
import queries from './queries';

export default {...authorResolvers, ...noteResolvers, ...queries};
