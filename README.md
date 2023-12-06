# Fast React Pizza

Developed for the purpose of reviewing React ([see Udemy course](https://www.udemy.com/course/the-ultimate-react-course/))

## Requirements

- Simple app where users can order one or more pizzas from a menu.
- Requires no user accounts and no login: users just input their names before using the app.
- The pizza menu can change, so it whould be fetched from an API. ✅
- Users can add multiple pizzas to a cart before ordering.
- Ordering requires just the user's name, phone number, and address.
- If possible, GPS locations should be also provided, to make delivery easier.
- Users can mark their order as "priority" for an additional 20% of the cart price.
- Orders are made by sending a POST request with the order data (user data + selected pizzas) to the API.
- Payments are made on delivery, so no payment processing is necessary in the app.
- Each order will get a unique ID that should be displayed, so the user can later look up their order based on the ID. ✅
- Users should be able to mark their order as "priority" even after it has been placed.
- The backend for this app is already built: https://react-fast-pizza-api.onrender.com/api/

## Feature Categories + Pages

- User
  - Homepage: `/`
- Menu
  - Pizza menu: `/menu`
- Cart
  - Cart: `/cart`
- Order
  - Placing a new order: `/order/new`
  - Looking up an order: `/order/:orderId`

## State Management

- User: Global UI state (no accounts, so stays in app)
- Menu: Global remote state (menu is fetched from API)
- Cart: Global UI state (stored in app)
- Order: Global remote state (fetched and submitted to API)

## Technologies

- Routing: React Router (because it's popular?)
- Styling: Tailwindcss (sorry I don't know how to write CSS)
- Remote state management: React Router (because I want to explore the new "render-as-you-fetch" approach from versions 6.4+. Not really state management, as it doesn't persist state. In the next app I'll probably try React Query)
- UI State management: Redux (I could use the Context API + useState/useReducer, but I need/want to practice Redux)
