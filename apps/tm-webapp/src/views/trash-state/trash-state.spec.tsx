import { render } from '@testing-library/react';

import TrashState from './trash-state';

describe('TrashState', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TrashState />);
    expect(baseElement).toBeTruthy();
  });
});
