import WebChat from './web-chat';

describe('<WebChatUI />', () => {
  const wrapper = shallow(<WebChat />);

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
