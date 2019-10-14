import Home from './home';

describe('<HomeUI />', () => {
  const wrapper = shallow(<Home />);

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
