# L&J Point of Sale (test build)

A test point-of-sale and guest list for restaurants and bars. One file, no database yet: everything is remembered in the browser on the device it runs on.

Open it: https://jrk1226.github.io/L-J/

## Test PINs

- Josh 1234 (manager)
- Sam 1111
- Alex 2222

Managers can change these under Settings.

## What is in it

- **Order** - tables across the top, menu in the middle, the check on the right. Search box, a Quick row of what gets rung up most, seats on a check, choices (Hot, Medium rare, No onions) and kitchen notes on every line. Hold a tile to add more than one or to 86 it for the night. Undo on the last thing you did.
- **Send** splits food to the Kitchen tab and drinks to the Bar tab. Each tab only shows its own tickets, with its own count on the rail. **Print check** prints an 80mm slip with tip lines.
- **Pay** - whole check, one seat, or split evenly. Tip buttons, "Flip to guest" so they pick the tip on the screen, cash with change back, a pretend card reader, house accounts. Receipt with a QR code to join the guest list.
- **Void** always asks why and lands in the Voids report. Voiding something already sent needs a manager PIN.
- **Kitchen** - food tickets in order, amber after 8 minutes and red after 12, Ready and Print.
- **Bar** - drink tickets only, amber after 5 minutes and red after 8, Made and Print.
- **History** on both Kitchen and Bar - look back at finished tickets, search by table or item, see when it was sent, when it was ready and whether it was picked up, reprint it, or put it back on the line.
- **Ready alerts** - when the kitchen taps Ready or the bar taps Made, the server sees a green "Food is up" or "Drinks up" bar at the top of Order, the table lights up green, and the Order tab gets a blinking count. Tap Picked up to clear it.
- **Guests** - regulars, birthdays this week, who has not been in for 30 days, house account tabs and statements. Tap a phone number to text. A QR code lets guests add themselves.
- **Reports** - today, by server, by hour, by day of week, tips owed at close, closed checks with reprint, voids.
- **Settings** (managers) - menu items with photos and choices, categories, staff and PINs, big-finger mode, light or dark look, tax rate, tip buttons, reset to sample data.

## Files

- `index.html` - the whole app
- `images/` - draft beer pictures (supplied by Josh) and cocktail photos

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
- Smash burger - "Cheeseburger with pickles", U.S. Department of Agriculture, public domain
- Chicken sandwich - "Fried chicken Burger in Milan, Italy" by Pava, CC BY-SA 3.0 IT
- Fish and chips - "Fish and chips at Sainsbury's Low Hall, Chingford, London" by Acabashi, CC BY-SA 4.0
- Steak frites - "Steak frites at The Bar at MacArthur Place in Sonoma" by Sarah Stierch, CC BY 4.0
- Penne vodka - "Penne Vodka" by J Doll, CC BY 3.0
- Margherita pie - "Margherita Originale" by Mario56, CC BY-SA 3.0
- Brownie sundae - "Chocolate brownie with a scoop of icecream from Gowlett, Peckham, London" by Ewan Munro, CC BY-SA 2.0
- Cheesecake - "Mondays at Il Forno - Cheesecake with strawberry sauce" by Alex Dugger, CC BY 2.0
- Cannoli - "Cannoli siciliani" by mat's eye, CC BY 2.0
