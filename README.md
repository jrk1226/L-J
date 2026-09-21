# L&J Point of Sale

A restaurant and bar point of sale built to be learned in ten minutes. One file, runs in any browser, keeps working with no internet. No shared database yet, so each tablet remembers its own day.

Open it: https://jrk1226.github.io/L-J/

The earlier, simpler build is still at https://jrk1226.github.io/L-J/classic.html

## Restaurant and Bar

Two independent systems in one app. The switch sits under the L&J logo: Restaurant (dining room, bar and patio, full menu, kitchen stations) or Bar (strictly a bar: sixteen stools, open tabs, and a drinks-only menu - on tap, bottles and cans, cocktails, shots, liquor by the pour, wine, soft drinks; no kitchen, drinks are rung up and poured). Each keeps its own floor, menu, checks and day; switching never mixes them.

## Test PINs

- Josh 1234 (owner)
- Dana 4444 (manager)
- Sam 1111 (server)
- Alex 2222 (server)
- Mike 3333 (bartender)

## What a server does

1. Enter a PIN.
2. See the floor: every table, who is on it, how long, the total, and its state (Available, Seated, Order entered, Food sent, Food is up, Food served, Check requested, Paid).
3. Tap a table. Tap a guest, tap what they want. Items that need a choice (temperature, side, sauce) ask only for that. Everything else is one tap.
4. Send. Food goes to the right station (Fry, Cold, Grill, Dessert), drinks go to the Bar. Hold entrees and fire them when the apps are cleared.
5. When the kitchen taps Ready, the table lights up green on the floor and the Floor tab blinks.
6. Split (evenly, by guest, by item, custom amounts), then Pay (card, cash, gift card, house account, phone pay), or hand the tablet to the guest: tip, tap, sign, receipt.
7. The table frees itself after the last payment.

Hold any line for Repeat, Change, Hold, Fire, Move guest, Move table, Comp, Void. Undo is at the bottom of the screen after most actions. The only things that ask "why" are voids, comps, refunds and discounts.

## Managers

The Manager tab has today's live numbers (sales, open checks, guests, average check, table turn time, voids, comps, discounts, refunds, kitchen ticket time), sales by employee, category and hour, tips owed at close, closed checks with reprint and refund, every void and comp with its reason, an audit log of who did what, and a screen to hand several tables to another employee at shift change. Alerts show at the top for big voids, repeated voids, heavy comps, slow tickets and tables open too long.

Settings has the menu (items, prices, photos, which choices each item asks), the choice groups themselves (required or optional, how many they can pick, extra charges), categories and their station and course, employees and roles, gift cards, tax and tip buttons.

Roles: server, bartender, host, cook, manager, owner. Servers can do everything on the floor; voiding something already sent, comps, refunds and discounts ask for a manager PIN and are logged with who approved them.

## Offline

The app installs to the home screen (Add to Home Screen on iPad, Install on Android or Chrome) and keeps working without internet: orders, tickets, tabs, payments and printing all carry on. Sharing between tablets is the next step and needs the shared database.

## Files

- `index.html` - the whole app
- `sw.js`, `manifest.json`, `icon.png` - what makes it installable and offline
- `images/` - menu photos (draft beer pictures supplied by Josh; the rest are openly licensed photos from Wikimedia Commons, credits below)
- `classic.html` - the earlier build

## Photo credits

Cropped from openly licensed photos on Wikimedia Commons:

- Old Fashioned - "Old fashioned orange slice cocktail ice cubes straw on table" by Personal Creations, CC BY 2.0
- Margarita - "Margarita with lime in a margarita glass" by Evan Swigart, CC BY 2.0
- Espresso Martini - "Espresso martini - November 2024" by Sarah Stierch, CC0
- Moscow Mule - "Moscow Mule at Rye, San Francisco", CC BY-SA 3.0
- Aperol Spritz - "Aperol Spritz - July 2024" by Sarah Stierch, CC0
- Well drink - "Gin and tonic with lime" by NotFromUtrecht, CC BY-SA 3.0
- House red - "A glass of red wine" by Davide Restivo, CC BY-SA 2.0
- House white - "Glass of White Wine shot with a bottle of white wine" by Evan Swigart, CC BY 2.0
- Pinot Grigio - "A hand pours white wine from a bottle into a glass" by Shixart1985, CC BY 2.0
- Cabernet - "Glass of Red Wine" by Sam Howzit, CC BY 2.0
- Prosecco - "Prosecco and snacks in Tuscany" by laura.foto, CC BY 2.0
- Soda - "Coca-Cola at restaurant Fylla's" by JIP, CC BY-SA 4.0
- Iced tea - "Ice Tea" by MzScarlett, CC BY 2.0
- Coffee - "Coffee cup on coffee beans" by Toni Cuenca, CC0
- Sparkling water - "Sparkling Water with Mint in Glass Cup" by Tony Webster, CC BY 2.0
- Wings - "Homemade buffalo wings" by stef yau, CC BY 2.0
- Mozzarella sticks - "Fried Mozzarella Sticks at Millers Pub" by Kim Scarborough, CC BY-SA 2.0
- Nachos - "Buffalo Nachos at Buffalo Bills" by pointnshoot, CC BY 2.0
- Calamari - "Fried calamari" by Chensiyuan, CC BY-SA 3.0
- Caesar salad - "Caesar Salad" by Prayitno, CC BY 2.0
- Cheeseburger - "Cheeseburger with pickles", U.S. Department of Agriculture, public domain
- Chicken sandwich - "Fried chicken Burger in Milan, Italy" by Pava, CC BY-SA 3.0 IT
- Fish and chips - "Fish and chips at Sainsbury's Low Hall, Chingford, London" by Acabashi, CC BY-SA 4.0
- Steak frites - "Steak frites at The Bar at MacArthur Place in Sonoma" by Sarah Stierch, CC BY 4.0
- Penne vodka - "Penne Vodka" by J Doll, CC BY 3.0
- Margherita pie - "Margherita Originale" by Mario56, CC BY-SA 3.0
- Brownie sundae - "Chocolate brownie with a scoop of icecream from Gowlett, Peckham, London" by Ewan Munro, CC BY-SA 2.0
- Cheesecake - "Mondays at Il Forno - Cheesecake with strawberry sauce" by Alex Dugger, CC BY 2.0
- Cannoli - "Cannoli siciliani" by mat's eye, CC BY 2.0
