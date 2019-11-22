import WebMessenger from './web-messenger';

describe('<WebMessengerUI />', () => {
  const wrapper = shallow(<WebMessenger />);

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
