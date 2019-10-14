import { MacroEconomicUI } from './macro-economic';

const props = {
  isInProgress: false,
  economicData: { date: null, data: null },
  selectedDate: null,
  pathname: 'en/home',
  setDate: null,
};

describe('<HomeUI />', () => {
  const wrapper = shallow(<MacroEconomicUI {...props} />);

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
