# Resume template (XeLaTex)

A free LaTex resume template for software developers to automate tailoring and jumpstart the career! See the preview below:

![Alt Text](/docs/preview/resume_page_1.png)

## About The Project

The resume, combined with the cover letter, serves as the primary step in securing a job interview. It's crucial to showcase how your skills and experience align with the specific requirements of the job opening. Since programming stacks and skill expectations vary between positions, tailoring your resume content for each job is key to standing out among numerous candidates.

This template is a simplified version inspired by the [Awesome CV and Junhao Dong resume projects](https://github.com/junhaodong/resume). Advanced features have been removed, and the code structure has been refactored to create a template ready for automated customization. It allows for efficient tailoring of your resume content to match the unique requirements of each position you pursue.

## Getting Started

### Easy way

[Edit Resume on Overleaf.com](https://www.overleaf.com/read/whvrrvtydcmy)

### Hard way (VSCode + Windows)

1. Install VS Code extensions:

   - [LaTeX Workshop](https://marketplace.visualstudio.com/items?itemName=James-Yu.latex-workshop)
   - [LaTeX Language Support](https://marketplace.visualstudio.com/items?itemName=torn4dom4n.latex-support)

2. Install [TeX Live](https://www.tug.org/texlive/) - [Easy Install Link](https://mirror.ctan.org/systems/texlive/tlnet/install-tl-windows.exe)

   > Note: Tex Live can take a long time to download depending on your internet connection.

3. Add the following `latex-workshop` configuration to `settings.json` in VSCode:

   ```json
   "latex-workshop.latex.build.forceRecipeUsage": false, // Enable "%magic comments" in the tex file
   "latex-workshop.latex.outDir": "%DIR%/out", // Output directory for the build files
   "latex-workshop.latex.magic.args": [
      "-synctex=1",
      "-interaction=nonstopmode",
      "-file-line-error",
      "--output-directory=%OUTDIR%",
      "%DOC%"
   ],
   ```

4. Update file content in `src/contacts.tex` and `src/content.tex`.
5. Open `resume_v2.tex` or `resume-v1.tex` and build file with `Ctrl+Alt+B` or with an extension button.

## Additional scripts

Once the resume is ready, you can use the following scripts to build up-to-date resume pdfs links. See the example - hosted on the GitHub Pages 'docs' folder of this repository - [https://annaburd.github.io/resume-template/](https://annaburd.github.io/resume-template/).

```bash
npm install # Install dependencies
```

```bash
# Copy the latest resume PDFs to the docs folder with the correct names
npm run copy-pdfs

# Update the links in the index.html file to point to the latest resume PDFs
npm run update-links

# Generate png preview of the resume for the README
npm run generate-preview

npm run update-docs # Do all the above steps in one command
```

## Contributions

Contributions to this template are welcome and encouraged. Follow these steps to contribute to the project:

1. **Fork the Repository:** Click on the "Fork" button at the top right corner of the [repository page](https://github.com/AnnaBurd/resume-template). This creates a personal copy of the project in your GitHub account.

2. **Clone the Forked Repository:** Clone your forked repository to your local machine using the following command in your terminal:

   ```bash
   git clone https://github.com/AnnaBurd/resume-template.git
   ```

3. **Create a Branch:** Create a new branch for your contributions. Use a descriptive branch name to convey the purpose of your changes:

   ```bash
   git checkout -b feature-your-contribution
   ```

4. **Make Changes:** Make the necessary changes or improvements to the template.

5. **Commit Changes:** Commit your changes with a clear and concise commit message:

   ```bash
   git commit -m "Add/update feature: your contribution"
   ```

6. **Push Changes:** Push your changes to your forked repository on GitHub:

   ```bash
   git push origin feature-your-contribution
   ```

7. **Submit a Pull Request (PR):** Visit the [original repository](https://github.com/AnnaBurd/resume-template) and click on the "Compare & pull request" button. Provide a brief summary of your changes and submit the pull request.

Your contributions will be reviewed, and once accepted, they will become part of the project. Thank you for your contribution!
