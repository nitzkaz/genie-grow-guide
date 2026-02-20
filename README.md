# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)

## Web3Forms Setup (Contact Form)

The contact form uses Web3Forms to send emails. To set it up:

1. **Sign up for Web3Forms** (free tier: 250 emails/month)
   - Go to https://web3forms.com/
   - Click "Get Started" or "Sign Up"
   - Enter your email address and create an account
   - **No credit card required**

2. **Verify your email**
   - Check your inbox for a verification email from Web3Forms
   - Click the verification link

3. **Get your Access Key**
   - After verification, you'll be redirected to your dashboard
   - Your **Access Key** will be displayed (looks like: `a1b2c3d4-e5f6-7890-abcd-ef1234567890`)
   - Copy this access key

4. **Configure Environment Variables**
   - Copy `.env.example` to `.env` in the project root:
     ```bash
     cp .env.example .env
     ```
   - Open `.env` and add your access key:
     ```
     VITE_WEB3FORMS_ACCESS_KEY=your_access_key_here
     ```
   - Replace `your_access_key_here` with the access key you copied

5. **Restart your dev server** after adding the `.env` file:
   ```bash
   npm run dev
   ```

That's it! The contact form will now send emails directly to your verified email address when users submit the form. You'll receive an email with:
- User's name
- User's email address
- Company (if provided)
- Message content
- Timestamp

You can also view submissions in your Web3Forms dashboard (stored for 30 days on the free plan).
