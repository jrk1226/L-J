# L&J - test point of sale and CRM

A one-page test of a restaurant and bar point of sale with a small guest book (the CRM side).

Open `index.html` in any browser. Everything runs in the page with sample data: nothing is saved when the page closes and no real card is charged.

What is in it:

- Floor: tables and bar seats, open checks in amber
- Order: menu by category, check with quantities and kitchen notes, tax at 8.875%
- Send to kitchen: food goes to a kitchen ticket, drinks to a bar ticket
- Pay: tip presets, card / cash / house account, split the check evenly
- Guests: regulars, phone, visits, spend, what they usually order, notes
- End of day: checks closed, sales, tips, tax, cards vs cash, top sellers

Next steps when it is worth building for real: a database so checks and guests are kept, logins for staff, a card reader, and a printer for kitchen tickets.

## Pictures on the menu tiles

Drop a photo into the `images` folder with one of these names and the tile picks it up on its own (until then the tile draws a pint of the right colour):

- `images/bud-light.png` (in place)
- `images/blue-point-toasted-lager.png` (in place)
- `images/montauk-wave-chaser.png` (in place)
- `images/guinness.png` (in place)
- `images/stella-artois.png` (in place)

Any square-ish photo works; it is cropped to fit. Use photos you have the rights to - your distributor's product sheets are the usual source.
