import { emojis } from '@/helpers/getRandomEmoji';

describe('Random emoji app', () => {
  it('Should visit website', () => {
    cy.visit('https://random-emoji-board.vercel.app/');
  });

  it('Should create random emoji on random space in board', () => {
    cy.visit('https://random-emoji-board.vercel.app/');
    // Click on board
    cy.get('.abbvny0').click();
    // Checking if emoji appears
    cy.get('.abbvny0')
      .find('span')
      .should(($span) => {
        const spanText = $span.text();
        expect(emojis).to.include(spanText);
      });
  });

  it('Should undo emoji', () => {
    cy.visit('https://random-emoji-board.vercel.app/');
    // Click on board
    cy.get('.abbvny0').click();
    // Checking if emoji appears
    cy.get('.abbvny0')
      .find('span')
      .should(($span) => {
        const spanText = $span.text();
        expect(emojis).to.include(spanText);
      });
    // Clicking undo button
    cy.contains('button', 'Undo').click();
    // Checking if undo worked
    cy.get('.abbvny0').find('span').should('not.exist');
    // Checking if history appears
    cy.get('._1u4mr1m0').children();
  });

  it('Should redo emoji', () => {
    cy.visit('https://random-emoji-board.vercel.app/');
    // Click on board
    cy.get('.abbvny0').click();
    // Checking if emoji appears
    cy.get('.abbvny0')
      .find('span')
      .should(($span) => {
        const spanText = $span.text();
        expect(emojis).to.include(spanText);
      });
    // Clicking undo button
    cy.contains('button', 'Undo').click();
    // Checking if undo worked
    cy.get('.abbvny0').find('span').should('not.exist');
    // Checking if history appears
    cy.get('._1u4mr1m0').children();
    // Clicking redo button
    cy.contains('button', 'Redo').click();
    // Checking if history disappeared
    cy.get('._1u4mr1m0').children().should('not.exist');
    // Check if emoji appears again
    cy.get('.abbvny0')
      .find('span')
      .should(($span) => {
        const spanText = $span.text();
        expect(emojis).to.include(spanText);
      });
  });
});
