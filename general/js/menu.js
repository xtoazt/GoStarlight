const contextMenu = document.getElementById('context-menu');

        // Function to create the context menu
        function createContextMenu(event) {
            event.preventDefault();
            contextMenu.innerHTML = `
                <ul>
                    <a id="openScriptButton"><li>Open in About:blank</li></a>
                    <a href="https://google.com"><li>Panic Button</li></a>
                    <a href="/general/pages/settings.html"><li>View Settings</li></a>
                </ul>
            `;
            contextMenu.style.display = 'block';
            contextMenu.style.left = `${event.pageX}px`;
            contextMenu.style.top = `${event.pageY}px`;
        }

        // Hide the context menu on click
        function hideContextMenu() {
            contextMenu.style.display = 'none';
        }

        // Event listeners
        window.addEventListener('contextmenu', createContextMenu);
        window.addEventListener('click', hideContextMenu);