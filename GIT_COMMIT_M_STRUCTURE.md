# Every commit message should follow this format

Plaintext
```
<type>(<scope>): <short description> 

[optional body explaining the "why", not just the "what"]
```

### The 5 Core Types You Will Use
``` feat ``` (**Feature**): You added a new capability to the API.
- Example: feat(hazards): add POST endpoint to create new road hazard

```fix``` (**Bug Fix**): You resolved an issue or a crash.
- Example: fix(db): resolve MongoDB connection timeout on startup

```chore``` (**Maintenance**): Updating dependencies, setting up configs, or things that don't directly affect the user-facing code.
- Example: chore(setup): initialize Express app and install mongoose

```docs``` (**Documentation**): Updates to the README.md or API documentation.
- Example: docs(api): add Postman workspace link to README

```refactor``` (**Refactoring**): Rewriting code to be cleaner or more efficient without changing its external behavior.
- Example: refactor(routes): move hazard logic from router to separate controller file

The Golden Rules for the Subject Line
Keep it under 50 characters.

Use the imperative mood. (Write "add route" instead of "added route" or "adding route". Imagine the sentence starts with "If applied, this commit will...").

Do not capitalize the first letter.

Do not put a period at the end.

Your Project Roadmap in Commits
If we were to track your progress over the next few hours of building the core Express architecture, your Git history should look beautifully structured like this:

```
chore(init): initialize npm and install express, mongoose, dotenv

feat(server): setup basic Express server running on port 3000

feat(middleware): add global error handler and JSON body parser

feat(hazards): create mongoose schema with GeoJSON point data

feat(api): implement POST /api/v1/hazards to save user reports
```

Pro-Tip for the Portfolio: If you want to take this to the next level and truly impress recruiters, look into a tool called Husky combined with Commitlint. You can set it up so that it blocks you from committing if you make a typo in the format (like typing feature: instead of feat:). It is a standard DevOps practice that looks fantastic on a resume.