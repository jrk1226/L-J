# L&J Point of Sale

A restaurant and bar point of sale built to be learned in ten minutes. One file, runs in any browser, keeps working with no internet. No shared database yet, so each tablet remembers its own day.

Open it: https://jrk1226.github.io/L-J/

The earlier, simpler build is still at https://jrk1226.github.io/L-J/classic.html

## Restaurant and Bar

Two independent systems in one app. The switch sits under the L&J logo: Restaurant (dining room, bar and patio, full menu, kitchen stations) or Bar (strictly a bar: sixteen stools, open tabs, and a drinks-only menu of about 130 drinks - on tap, bottles and cans, cocktails, shots, liquor by the pour, wine, soft drinks, every one with a picture; no kitchen, drinks are rung up and poured). Each keeps its own floor, menu, checks and day; switching never mixes them.

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

Bar menu photos (also from Wikimedia Commons, cropped square; a few brands use a generic bottle or glass photo where no openly licensed picture existed, and a manager can attach the real bottle photo per drink in Settings):

- `images/coors-light.jpg` - "Can Coors Light" by Kimjon12, CC BY-SA 4.0
- `images/michelob-ultra.jpg` - "2016-365-253 Under the Taps (21128015548)" by cogdogblog, CC BY 2.0
- `images/blue-moon.jpg` - "Blue Moon beer - València" by Francesc Fort, CC BY-SA 4.0
- `images/sam-adams.jpg` - "Samuel Adams Summer Ale (5914190156)" by Erik Cleves Kristensen, CC BY 2.0
- `images/ipa-of-the-day.jpg` - "A glass of cloudy unfiltered beer- fascinating! (27798855532)" by shankar s., CC BY 2.0
- `images/yuengling.jpg` - "Brozinni Pizzeria Speedway - June 2022 - Sarah Stierch 05" by Missvain, CC BY 4.0
- `images/corona.jpg` - "Cerveza corona" by Kjetil2006, CC BY-SA 3.0
- `images/heineken.jpg` - "Heineken experience amsterdam" by Andybryant, Public domain
- `images/miller-lite.jpg` - "Miller Lite (2639815996)" by Tony Webster, CC BY 2.0
- `images/modelo.jpg` - "Pepe's Mexican Jindalee, 2026, 04" by Chris Olszewski, CC BY-SA 4.0
- `images/budweiser.jpg` - "A bottle of Budweiser" by Lindell005, Public domain
- `images/white-claw.jpg` - "Bodega Bay Hard Seltzer" by Charliemarkland, CC BY-SA 4.0
- `images/high-noon.jpg` - "High Noon seltzer" by BanjoZebra, CC BY 4.0
- `images/truly.jpg` - "17 Hard Seltzers (cropped)" by FakirNL, cropped by Yellowcard, CC BY-SA 4.0
- `images/bucket.jpg` - "CERVEZA" by Kfengler, CC BY 3.0
- `images/pacifico.jpg` - "-365 PV Oscars (24744858505)" by terri_bateman, CC BY 2.0
- `images/na-beer.jpg` - "Apres beers at the GLC (16831546396)" by Ruth Hartnup, CC BY 2.0
- `images/mojito.jpg` - "Cocktail Mojito" by varshesh (Unsplash), CC0
- `images/cosmopolitan.jpg` - "Cosmopolitan cocktail drink" by Jon Sullivan, Public domain
- `images/manhattan.jpg` - "A Manhattan" by Graeme Maclean, CC BY 2.0
- `images/negroni.jpg` - "Negroni" by Chris Palmer, CC BY-SA 2.0
- `images/whiskey-sour.jpg` - "Whiskey Sour im Collegium in Tübingen" by Dktue, CC0
- `images/long-island.jpg` - "Long Island Iced Tea with Lemon and Straw" by Alisdair McDiarmid, CC BY 2.0
- `images/paloma.jpg` - "TequilaPaloma" by Antonio Cavallo, Public domain
- `images/bloody-mary.jpg` - "Bloody Mary" by William Clifford, CC BY 2.0
- `images/mimosa.jpg` - "Grapefruit and Orange Juice Mimosas" by John Knox, CC BY-SA 2.0
- `images/daiquiri.jpg` - "Lychee Daquiri - Namo 2025-10-28" by Andy Li, CC0
- `images/pina-colada.jpg` - "Pinky Colada (Cocktail)" by Martin Asche, CC BY-SA 3.0
- `images/sex-on-beach.jpg` - "Sex On The Beach (Drink)" by Dtarazona, Public domain
- `images/tequila-sunrise.jpg` - "TequilaLunazul" by Antonio Cavallo, Public domain
- `images/mai-tai.jpg` - "Mai tai, Mazatlán, 30 de noviembre de 2022" by El Nuevo Doge, CC0
- `images/dark-stormy.jpg` - "Dark 'N' Stormy" by Will Shenton, CC BY-SA 3.0
- `images/sangria.jpg` - "Glass of Sangria - Tinto Taperia 2026-05-17" by Andy Li, CC0
- `images/irish-coffee.jpg` - "Irish coffee1" by Anette B., Public domain
- `images/amaretto-sour.jpg` - "VTR amaretto sour" by Edsel Little, CC BY-SA 2.0
- `images/dirty-martini.jpg` - "Classic martini by Ken30684" by Ken30684, CC BY 2.0
- `images/white-russian.jpg` - "RusoBlanco" by Dtarazona, Public domain
- `images/jack-coke.jpg` - "Jack Daniels Lolla Lemonade" by Aneil Lutchman, CC BY-SA 2.0
- `images/rum-coke.jpg` - "Cuba libre 02" by Arnaud 25, CC BY-SA 4.0
- `images/gin-fizz.jpg` - "Gin Fizz im Friedrichs in Tübingen 2019" by Dktue, CC0
- `images/lemon-drop-martini.jpg` - "Lemon Drop cocktail" by Dave Parker, CC BY 2.0
- `images/tequila-shot.jpg` - "Casa Noble tequila" by Casa Noble, CC BY-SA 3.0
- `images/fireball.jpg` - "Fireball Cinnamon Whisky" by Belenois, CC BY-SA 4.0
- `images/shots-amber.jpg` - "3kielony" by Wikimedia Commons contributor, CC BY-SA 3.0
- `images/shots-color.jpg` - "Assorted Shots (5084102345)" by TheCulinaryGeek, CC BY 2.0
- `images/shots-round.jpg` - "Fernet Stock shots" by Wikimedia Commons contributor, CC BY-SA 3.0
- `images/shots-flaming.jpg` - "Flaming Sambuca con la mosca" by Twentyfour Students, CC BY-SA 2.0
- `images/shots-clear.jpg` - "Chupitos de aguardiente" by Tamorlan, CC BY 3.0
- `images/shots-layered.jpg` - "Chupito-brea-corazoncillo" by Tamorlan, CC BY 3.0
- `images/casamigos.jpg` - "Casamigos Blanco Tequila 01" by Indrajit Das, CC BY-SA 4.0
- `images/don-julio.jpg` - "Tequila Don Julio" by jlastras, CC BY 2.0
- `images/titos.jpg` - "Tito's Vodka bottle 1.75L size" by Kenneth C. Zirkel, CC BY-SA 4.0
- `images/grey-goose.jpg` - "Bouteilles Guillotine Vodka" by Guillotinevodka, CC BY-SA 3.0
- `images/ketel-one.jpg` - "Adler-Wodka im Wandel der Zeit" by Martin Barth, CC BY-SA 4.0
- `images/bombay.jpg` - "Bombay Sapphire - bouteilles" by Mattes, Public domain
- `images/hendricks.jpg` - "Hendrick's gin 001" by Lennert B, CC BY 3.0
- `images/bacardi.jpg` - "HK Sai Ying Pun Queen's Road West Sept 2018 Soho Wine shop White Rum" by Fooren Li Hoah, CC BY-SA 4.0
- `images/captain-morgan.jpg` - "HK Mid-Levels Caine Road Caine Mansion shop Fusion by ParknShop wine bottles August 2020 SS2 07" by Kam LAOU 312 332, CC BY-SA 4.0
- `images/patron.jpg` - "PatronGoldBottle" by Broncinbuck, CC BY-SA 3.0
- `images/jack-daniels.jpg` - "Alcoholic beverages 003" by Albert Jankowski, Public domain
- `images/jameson.jpg` - "Jameson Irish Whiskey" by GotIreland, CC BY-SA 2.0
- `images/makers-mark.jpg` - "Lincoln Heritage Scenic Highway - Maker's Mark Bottle - NARA - 7720075" by U.S. National Archives, Public domain
- `images/whiskey-rocks.jpg` - "A Glass of Whiskey on the Rocks" by Benjamin Thompson, CC BY 3.0
- `images/johnnie-walker.jpg` - "Johnnie Walker Black Label" by Iceman7840, CC BY-SA 3.0
- `images/hennessy.jpg` - "Cognac Hennessy XO" by Dmitrij Rodionov, CC BY-SA 4.0
- `images/baileys.jpg` - "Jvas bailey's macro" by Wikimedia Commons contributor, Public domain
- `images/absolut.jpg` - "Absolut sammel" by Galdan, Public domain
- `images/tanqueray.jpg` - "Tanqueraybottles" by Chris Corwin, CC BY-SA 2.0
- `images/malibu.jpg` - "HK Southern Cyberport supermarket Fusion by Park n Shop bottle Alcoholic beverages & wines January 2019 SSG 05" by Foreedontz MIU, CC BY-SA 4.0
- `images/jose-cuervo.jpg` - "Jose cuervo" by Belenois, CC BY-SA 4.0
- `images/crown-royal.jpg` - "Crown Royal Cask No. 16 whiskey" by joefoodie, CC BY 2.0
- `images/jagermeister.jpg` - "Jägermeister 1,75 l" by Uusijani, CC0
- `images/whiskey-neat.jpg` - "Drink Up! (Unsplash)" by Michael Mroczek, CC0
- `images/whiskey-pour.jpg` - "Cold-light-alcohol-glass (24300275026)" by Pixel.la Free Stock Photos, CC0
- `images/woodford.jpg` - "WR DS" by オカムラ, CC BY-SA 4.0
- `images/southern-comfort.jpg` - "Southern Comfort bottle- St. Louis era" by WSS Regt Historian, CC0
- `images/champagne.jpg` - "Pouring two champagne glasses" by Quinn Dombrowski, CC BY-SA 2.0
- `images/rose.jpg` - "Rose wine " by Samantha from Scotland UK, CC BY-SA 2.0
- `images/red-bull.jpg` - "Redbull zero 1" by Connor J Williams, CC BY 2.0
- `images/ginger-beer.jpg` - "Ginger beer in glass" by Corn cheese, CC0
- `images/tonic.jpg` - "Tonic water uv" by Splarka, Public domain
- `images/lemonade.jpg` - "عصير ليمون" by Haneen wwheed, CC0
- `images/cranberry.jpg` - "Cocktail with vodka" by Wendy from Minneapolis, CC BY 2.0
- `images/hot-tea.jpg` - "20250624 vapor1" by Tn.kuvat, CC0
- `images/shirley-temple.jpg` - "Canadia-style Shirley Temple" by Ryan Forsythe, CC BY-SA 2.0
- `images/arnold-palmer.jpg` - "My new obsession the arnold palmer!!! (5184944881)" by irina slutsky, CC BY 2.0
- `images/water.jpg` - "Bubbles in glass of water" by Paolo Neo, Public domain

The photo sheets these were cut from are in `images/_sheets/`.
