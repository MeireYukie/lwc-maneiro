import { createElement } from 'lwc';
import Lwc_maneiro_ex01 from 'c/lwc_maneiro_ex01';

describe('c-lwc-maneiro-ex01', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('TODO: test case generated by CLI command, please fill in test logic', () => {
        // Arrange
        const element = createElement('c-lwc-maneiro-ex01', {
            is: Lwc_maneiro_ex01
        });

        // Act
        document.body.appendChild(element);

        // Assert
        // const div = element.shadowRoot.querySelector('div');
        expect(1).toBe(1);
    });
});