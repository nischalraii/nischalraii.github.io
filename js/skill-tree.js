 const logoMap = {
            PHP: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
            Laravel: 'https://www.logo.wine/a/logo/Laravel/Laravel-Logo.wine.svg',
            Livewire: 'https://laravel-livewire.com/img/logo.svg',
            JavaScript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
            jQuery: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg',
            React: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
            MySQL: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
            PostgreSQL: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
            Git: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
            Docker: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
            Database: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT64C7HRS_fa5nt7ER9eoqHJAHGEiCmEt7h7A&s',
            Tools: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKxuCZpTgBD3nlXTdHof-ChRFykljUR3WJ7g&s'
        };

        const skillTree = {
            PHP: {
                Laravel: {
                    Livewire: {}
                }
            },
            JavaScript: {
                jQuery: {},
                React: {}
            },
            Database: {
                MySQL: {},
                PostgreSQL: {}
            },
            Tools: {
                Git: {},
                Docker: {}
            }
        };

        const treeContainer = document.getElementById("tree");

        function createBranch(skill, children) {
            const branch = document.createElement("div");
            branch.className = "branch";

            const node = document.createElement("div");
            node.className = "hex";

            const img = document.createElement("img");
            if (logoMap[skill]) img.src = logoMap[skill];

            const label = document.createElement("span");
            label.textContent = skill;

            node.appendChild(img);
            node.appendChild(label);
            branch.appendChild(node);

            for (const child in children) {
                const connector = document.createElement("div");
                connector.className = "connect";
                branch.appendChild(connector);
                branch.appendChild(createBranch(child, children[child]));
            }

            return branch;
        }

        for (const skill in skillTree) {
            const branch = createBranch(skill, skillTree[skill]);
            treeContainer.appendChild(branch);
        }