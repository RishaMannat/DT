// Fetch the JSON file
fetch('data.json')
  .then((response) => response.json())
  .then((data) => {
    // Populate Header
    document.getElementById('page-title').textContent = data.pageTitle;
    document.getElementById('header-description').textContent = data.headerDescription;

    // Populate Video Section
    document.getElementById('video-title').textContent = data.sections.videoSection.title;
    document.getElementById('video-description').textContent = data.sections.videoSection.description;
    document.getElementById('video-frame').src = data.sections.videoSection.videoUrl;

    // Populate Thread Build Section
    document.getElementById('threadbuild-description').textContent = data.sections.threadBuild.description;

    // Populate Structure Your Pointers Section
    document.getElementById('structure-pointers-description').textContent =
      data.sections.structurePointers.description;

    // Populate 4SA Method Section
    document.getElementById('four-sa-description').textContent = data.sections.fourSAMethod.description;
    document.getElementById('four-sa-introduction').textContent = data.sections.fourSAMethod.introduction;
    document.getElementById('four-sa-thread').textContent = data.sections.fourSAMethod.threadA;
    document.getElementById('four-sa-example').textContent = data.sections.fourSAMethod.example;
  })
  .catch((error) => console.error('Error fetching JSON:', error));
