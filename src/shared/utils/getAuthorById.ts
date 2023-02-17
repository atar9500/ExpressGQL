import {MangoContext} from '../types';

const getAuthorById = (context: MangoContext, authorId: string) => {
  const author = context.data.authors.find(({id}) => id === authorId);
  if (!author) {
    throw Error('Author does not exist!');
  }
  return author;
};

export default getAuthorById;
