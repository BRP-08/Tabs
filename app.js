    var tabCounter = 1;

    function openTab(evt, tabName) {
      var i, tabcontent, tablinks;

      tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove("active");
      }

      tablinks = document.getElementsByClassName("tablink");
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
      }

      document.getElementById(tabName).classList.add("active");
      evt.currentTarget.classList.add("active");
    }

    function showInput() {
      var activeTab = document.querySelector(".tabcontent.active");
      var input = activeTab.querySelector("input").value;

      console.log("Input:", input);
    }

    function addTab() {
      if (tabCounter < 5) {
        tabCounter++;

        var tabs = document.querySelector(".tabs");
        var newTabButton = document.createElement("button");
        newTabButton.setAttribute("class", "tablink");
        newTabButton.setAttribute("onclick", "openTab(event, 'tab" + tabCounter + "')");
        newTabButton.innerHTML = "Tab " + tabCounter;

        tabs.insertBefore(newTabButton, tabs.lastElementChild);

        var tabClone = document.getElementById("tab1").cloneNode(true);
        tabClone.setAttribute("id", "tab" + tabCounter);
        tabClone.classList.remove("active");

        var tabContents = tabClone.getElementsByClassName("tabcontent");
        for (var i = 0; i < tabContents.length; i++) {
          var input = tabContents[i].getElementsByTagName("input")[0];
          input.value = "";
        }

        document.querySelector(".container").appendChild(tabClone);
        openTab(event, "tab" + tabCounter);
      }

      if (tabCounter === 5) {
        document.querySelector(".addButton").style.display = "none";
      }
    }

    function cancelTab(tabId) {
      var tab = document.getElementById(tabId);
      var tabButton = document.querySelector(".tablink[onclick=\"openTab(event, '" + tabId + "')\"]");

      tab.parentNode.removeChild(tab);
      tabButton.parentNode.removeChild(tabButton);

      if (tabCounter > 1) {
        tabCounter--;
        openTab(event, "tab" + tabCounter);
      }

      if (tabCounter < 5) {
        document.querySelector(".addButton").style.display = "block";
      }
    }