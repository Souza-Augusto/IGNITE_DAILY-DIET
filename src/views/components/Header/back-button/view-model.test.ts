import { act, renderHook } from '@__tests__/utils/customRenderItem';
import { useBackButtonViewModel } from './view-model';
import { useNavigation } from '@react-navigation/native';

jest.mock('@react-navigation/native');

beforeEach(() => {
  jest.clearAllMocks();
});

const mockedGoBack = jest.fn();
(useNavigation as jest.Mock).mockReturnValue({
  goBack: mockedGoBack,
});

describe('Component:Header viewModel', () => {
  it('should call handleGoback ', () => {
    const { result } = renderHook(() => useBackButtonViewModel());

    act(() => result.current.handleGoBack());

    expect(mockedGoBack).toHaveBeenCalled();
  });
});
