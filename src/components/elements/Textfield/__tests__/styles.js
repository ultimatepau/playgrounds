import styles from '../styles';
import theme from '../../styles/theme';

describe('styles', () => {
  test('must retun object', () => {
    expect(typeof styles(theme)).toEqual('object');
  });
});