import { render } from '@testing-library/react';

import TrashType from './trash-type';

describe('TrashType', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TrashType />);
    expect(baseElement).toBeTruthy();
  });
});
