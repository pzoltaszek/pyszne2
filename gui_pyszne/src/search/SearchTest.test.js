import { render, screen, fireEvent } from '@testing-library/react';
import Search from './Search';

test('Search component render test', () => {
    render(<Search />);
});

test('Search component input test', () => {
    const component = render(<Search />);
    const input = component.getByLabelText('search-input')
    
    fireEvent.change(input, { target: { value: '123' } })
    expect(input.value).toBe('123');
});
