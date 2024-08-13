# Car Dealer App Test by Francisco Cáceres
## Running the project
**Env variables**
You should add your the variable NEXT_PUBLIC_API_URL to a .env.local file ("https://vpic.nhtsa.dot.gov/api" for the job test)

**Run the development server:**
```bash
npm  run  dev
# or
yarn  dev
# or
pnpm  dev
# or
bun  dev
```
And the project should be running at http://localhost:3000!

## Features and architecture
The application consists of a homepage that allows users to select two filters to get vehicles from the NHTSA api. After selecting the filters, the user can press the Next button and will be redirected to a Results page, where they will be able to see a list of models that fit the criteria selected.


**Thank you for reading! Any feedback is appreciated**
