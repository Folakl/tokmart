🛒 Shopping Cart with Supabase

A React-based e-commerce cart system integrated with Supabase for authentication, persistent cart storage, and product ratings.
The project demonstrates how to manage a global cart using React Context, sync cart data with a Supabase backend, and ensure the cart persists across reloads and logins.

🚀 Features
Authentication with Supabase
Global Cart Management using React Context
Persistent Cart stored in Supabase (cart does not reset on reload)
Add / Remove Items and update quantities
Total Price Calculation automatically updates with cart changes
Product Ratings stored per user in Supabase
Responsive UI built with TailwindCSS
🛠️ Tech Stack
Frontend: React + Vite, TailwindCSS
Backend: Supabase (Postgres + Auth)
State Management: React Context API
Database Tables:
carts → stores user’s cart items & total
ratings → stores product ratings per user
⚙️ Installation & Setup

Clone the repository:

git clone https://github.com/Folakl/tokmart.git
cd tokmart
Install dependencies:
npm install


Start development server:

npm run dev

🔧 Supabase Setup
Go to Supabase and create a new project.
Copy your API URL and anon key into a supabaseClients.js file:
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://your-project.supabase.co";
const supabaseKey = "your-anon-key";
export const supabase = createClient(supabaseUrl, supabaseKey);

Create the following tables in your database:
carts
create table carts (
  user_id uuid references auth.users on delete cascade,
  items jsonb,
  total numeric,
  primary key (user_id)
);

ratings
create table ratings (
  user_id uuid references auth.users on delete cascade,
  product_id text,
  rating int,
  primary key (user_id, product_id)
);
🤝 Contribution

Pull requests are welcome! For major changes, please open an issue first to discuss what you’d like to change.

👨‍💻 Author
Developed by Folakl 🚀
