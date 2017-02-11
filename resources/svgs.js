exports.logo = (doc, color='black', width=200, x=0, y=0) => {
    doc.save()
    doc.translate(x, y).scale(width/1520)
    doc.path(`M632.2,164.7C571.8,86.8,467.7,29.5,351.8,29.5c-126.3,0-231.3,64.8-288.6,154.8c-14.1,22.1-20.9,36.9-28.1,62
        c-6.5,22.8-19,51.6-19,76.1c0,39.4,13.9,74.5,30.1,105c13.6,25.6,27.3,47.9,50.2,66.9c61.6,51.2,153.1,77.9,255.3,77.9
        c101.4,0,192.3-26.4,253.8-76.7c22.8-18.7,38.6-46.7,52.4-71.9c17-31,29.4-60.8,29.4-101.3c0-29.9-11.1-58.7-20.6-85.8
        C657,208.6,650.5,188.4,632.2,164.7z M234.6,529.8c-41-12.2-96.9-26.8-129.2-56.4c-27.2-24.9-44.8-67-60.4-99.6
        c-16.4-34.2-11.7-52.4,0.9-88.2c6.6-18.8,18.9-74.5,38.1-84.9c-9.3,5.1,9.3-5.1,0,0c24.3-13.2,11.4,72.5,9.9,78.5
        c-6.3,25-15.9,47.3-3.5,70.9c12.3,23.5,24.2,51.7,40.7,72.6c9.5,12,58.1,51.1,73.4,36.1c-5.4,5.3-54.6-31.4-61.3-37.3
        c-14.3-12.7-34.2-39.6-25-60.2c8.7-19.4,36.7,10.4,45.8,17c16.6,11.9,28.7,15.4,48.3,18.3c49.7,7.2,114.4,34.1,116.6,92
        C331,541.4,272.9,541.2,234.6,529.8z M314.4,132.2c17.4-46.3,105.2-27.8,142.3-6.2c2.7,1.6,4.2-3.8,6.2-2.1
        C405,78.2,306.2,90,239.3,108.5C219,114,115.2,199.8,98.2,165.3c4.7,9.5-4.7-9.5,0,0c-5.6-11.3,67.9-65.8,76.5-71.6
        c32.5-22.1,65.7-29.8,104.7-39.7c87.9-22.3,191.8-3,267.7,53.3c37.3,27.6,72.9,53.7,26.7,90.5c-39.8,31.6-113.3,12.9-146.3-22
        C414.6,162.1,310.8,141.9,314.4,132.2z M658.7,373.8c-15.6,32.6-33.2,74.7-60.4,99.6c-32.3,29.6-88.2,44.2-129.2,56.4
        c-38.3,11.4-96.4,11.6-94.4-41.3c2.2-57.9,66.9-84.8,116.6-92c19.6-2.9,31.7-6.4,48.3-18.3c9.1-6.5,37.1-36.4,45.8-17
        c9.2,20.6-10.7,47.5-25,60.2c-6.6,5.9-55.9,42.6-61.3,37.3c15.3,15,63.9-24.1,73.4-36.1c16.5-20.9,28.3-49.1,40.7-72.6
        c12.4-23.6,2.8-45.9-3.5-70.9c-1.5-5.9-14.4-91.7,9.9-78.5c-9.3-5.1,9.3,5.1,0,0c19.2,10.4,31.5,66.1,38.1,84.9
        C670.4,321.4,675.1,339.6,658.7,373.8z`)
    doc.path(`M738.5,434.8V159.4c0-10.4,5.2-15.6,15.6-15.6h15.6c10.2,0,15.4,5.2,15.4,15.6v156.9l55.4-81.5
        c2.8-4.1,5.8-7,8.8-8.8c3.1-1.8,7.3-2.7,12.6-2.7h21.9c5.2,0,8.6,2,10.1,6c1.5,4,0.8,7.8-2.3,11.3L833.5,315l60.4,118.5
        c2.2,4.1,2.5,7.9,0.7,11.5c-1.8,3.6-5.2,5.4-10.2,5.4h-20c-5.5,0-9.7-0.9-12.5-2.6c-2.9-1.8-5.3-4.7-7.3-8.9l-40.8-85.1L785,377.9
        v56.9c0,10.4-5.1,15.6-15.4,15.6h-15.6C743.7,450.3,738.5,445.2,738.5,434.8z"`)
    doc.path(`M951.5,223h-15.6c-10.4,0-15.9,5.3-15.9,15.5v196.2c0,10.4,5.5,15.2,15.9,15.2h15.6c10.2,0,15.5-4.8,15.5-15.2
        V238.5C967,228.3,961.7,223,951.5,223z`)
    doc.path(`M1032.9,223h-15.6c-10.4,0-15.3,5.3-15.3,15.5v226.1c0,11.1-4.7,16.6-13.8,16.6c-3.1,0-7.2-0.6-12.3-1.7
        c-4.3-1-7.8,0-10.2,2.9c-2.4,2.9-3.7,7.2-3.7,12.6v12.4c0,4.9,1.1,8.5,3.2,10.6c2.1,2.2,5.7,3.8,10.6,4.9
        c5.5,1.1,11.5,1.7,18.1,1.7c16.4,0,29.5-4.7,39.4-14c9.9-9.3,14.7-24.3,14.7-45V238.5C1048,228.3,1043.1,223,1032.9,223z`)
    doc.path(`M1075.5,386.5v-0.8c0-21.8,6.6-38.6,19.7-50.6c13.1-12,31.8-18,55.9-18h28.8v-19.4c0-23.9-9.6-35.8-28.8-35.8
        c-7.9,0-13.9,2.2-18.2,6.5c-4.3,4.4-6.4,9.8-6.4,16.4c0,8.8-4.5,13.3-13.5,13.3h-17.7c-10.2,0-15.4-5.2-15.4-15.6
        c0-18.7,6.5-34,19.5-46.1c13-12.1,30.2-18.1,51.7-18.1c22.5,0,40.6,6.6,54.5,19.7c13.9,13.1,20.8,32,20.8,56.7v84
        c0,24.7-6.9,43.6-20.8,56.7c-13.9,13.1-32.1,19.7-54.5,19.7c-22.3,0-40.5-6.1-54.5-18.4C1082.5,424.5,1075.5,407.7,1075.5,386.5z
        M1130,359.3c-5.3,4.8-8,12.3-8,22.4c0,10.1,2.7,17.6,8,22.5c5.3,4.9,12.4,7.4,21.1,7.4c19.2,0,28.8-11.9,28.8-35.8V352h-28.8
        C1142.4,352,1135.3,354.4,1130,359.3z`)
    doc.path(`M1254.9,434.8v-140c0-24.7,6.9-43.6,20.8-56.7c13.9-13.1,32.1-19.7,54.5-19.7c22.5,0,40.7,6.6,54.6,19.8
        c14,13.2,21,32.1,21,56.6v140c0,10.4-5.2,15.6-15.6,15.6h-15.6c-10.2,0-15.4-5.2-15.4-15.6V297.7c0-23.9-9.7-35.8-29.1-35.8
        c-19.2,0-28.8,11.9-28.8,35.8v137.1c0,10.4-5.2,15.6-15.6,15.6h-15.4C1260.1,450.3,1254.9,445.2,1254.9,434.8z`)
    doc.path(`M1470.2,223h-15.6c-10.4,0-15.6,5.3-15.6,15.5v196.2c0,10.4,5.2,15.2,15.6,15.2h15.6
        c10.2,0,14.8-4.8,14.8-15.2V238.5C1485,228.3,1480.4,223,1470.2,223z`)
    doc.fill(color)
    doc.restore()
    return doc
}


exports.signature = (doc, color='black', width=200, x=0, y=0) => {
    doc.save()
    doc.translate(x, y).scale(width/600).rotate(4)
    doc.path(`M548.8,106.6L548.8,106.6L548.8,106.6z`)
    doc.path(`M551.1,105.2c-0.2-1.6-2.1-1.7-2.8-1.7c-96.6-2.5-206.7,20-279.6,34.9c-41.6,8.5-77.7,15.9-82.9,12.1
        c3.3-5.9,53.7-32.1,87.3-49.5c59.3-30.8,61.5-32.8,60.6-35.4c-1-2.8-8-2.2-86.8,11.8c-3.6,0.6-7.4,1.3-11.2,2
        c38-16.6,38-19.8,38-21.6c0-1.4-0.5-3.3-2.8-5c-9.8-6.9-46.3-2.7-78,9c-5,1.8-10.1,3.7-15,5.4c-36.7,13.2-57.4,21.1-55.4,29.2
        c0.5,1.9,2.7,2.7,13.3,1.9c6.7-0.6,16.2-1.8,29-3.7c13.5-2.1,29.1-4.7,45.4-7.5c-13.8,5.7-30.7,12.5-51.4,20.6
        C104.5,128.7,50,148.7,49.5,148.9c-0.8,0.3-1.2,1.1-0.9,1.9c0.3,0.8,1.1,1.2,1.9,0.9c0.6-0.2,56.2-20.6,111.2-42.1
        c26.4-10.3,46.6-18.5,62-25.1c7.9-1.4,15.9-2.8,23.7-4.2c35.5-6.3,72-12.8,81.8-13.2c-7,5-33.7,18.8-57.5,31.2
        c-52.8,27.4-87.5,45.8-88.9,51.8c-0.2,0.7-0.1,1.4,0.3,1.9c0,0,0,0.1,0.1,0.1c1.3,1.6,4.3,2.4,9.2,2.4c12.3,0,36.6-4.8,77-13.1
        c71.9-14.7,180.1-36.8,275.5-34.9c-5,2.1-14.4,5.3-23.2,7.9c-0.8,0.2-1.2,1.1-1,1.9c0.2,0.8,1.1,1.2,1.9,1
        C551.5,108.4,551.3,106.6,551.1,105.2z M222.8,81.7c-44,7.7-91.8,15.8-97.4,13.5c-0.3-5.9,28.3-16.2,53.6-25.3
        c4.9-1.8,9.9-3.6,15-5.4c26.9-9.8,65.6-16.1,75.3-9.3c1.3,0.9,1.5,1.8,1.5,2.4C270.1,59.2,263.2,64.5,222.8,81.7z`)
    doc.path(`M270.8,57.6L270.8,57.6L270.8,57.6z`)
    doc.path(`M348,114c-4.5,0-10.5-1.6-13.6-4.4c-1.5-1.4-2.3-3-2.3-4.7c0.2-6.1,5-11.4,8.2-12.4c2.3-0.7,11.9,0.2,17.4,3.6
        c2.4,1.5,3.8,3.3,4.2,5.4c0.5,2.7,0,5-1.5,7.1c-2,2.7-5.9,4.7-10.4,5.3C349.4,114,348.7,114,348,114z M342.5,95.2
        c-0.6,0-1.1,0-1.4,0.1c-2,0.6-5.9,4.8-6.1,9.6c0,0.8,0.4,1.6,1.3,2.4c2.8,2.6,9.6,4,13.3,3.5c3.7-0.5,6.9-2,8.4-4.1
        c1-1.4,1.3-2.9,1-4.8c-0.2-1.2-1.2-2.4-2.8-3.4C352.1,96.2,345.6,95.2,342.5,95.2z`)
    doc.path(`M369.8,107.6c-0.9,0-1.8-0.3-2.6-0.9c-2.6-2-4.2-7.6-4.8-17c-0.4-6.7-0.2-12.7-0.2-12.9c0-0.8,0.7-1.5,1.6-1.4
        c0.8,0,1.5,0.7,1.4,1.6c-0.4,9.2,0.3,24.7,3.8,27.4c0.4,0.3,0.8,0.4,1.3,0.2c7.5-2.3,10-11.7,10-11.8c0.2-0.6,0.7-1.1,1.4-1.1
        c0.7,0,1.2,0.3,1.5,0.9c0.2,0.5,5.6,13.4,17.7,9.8c0.8-0.2,1.6,0.2,1.9,1c0.2,0.8-0.2,1.6-1,1.9c-10.6,3.1-16.9-4.1-19.7-8.5
        c-1.6,3.5-4.8,8.7-10.8,10.6C370.7,107.5,370.2,107.6,369.8,107.6z`)
    doc.path(`M409.2,105.4c-1.5,0-1.8-0.3-2-0.5c-0.6-0.6-0.7-1.6-0.2-2.4c0.6-1,3-2.4,5.6-3.6c-7.4-1.2-17.6-3.7-17.9-7.3
        c-0.1-0.6,0.1-1.5,0.9-2.3c3.6-3.6,19.1-3,19.2-3c2.3,0.2,3.4,1.7,3.7,2.5c0.3,0.8-0.1,1.6-0.9,1.9c-0.8,0.3-1.6-0.1-1.9-0.8
        c-0.1-0.1-0.3-0.6-1.2-0.6c-3.8-0.3-15.3,0.4-16.8,2c1.7,2.1,15.7,5.1,20.8,5.4c1-0.2,1.8-0.3,2.2-0.2c0.7,0.2,1.2,0.8,1.2,1.6
        c0,0.4-0.1,1.6-2,1.7c-0.2,0-0.5,0-1,0c-1.5,0.4-4,1.4-6,2.3c4.9-0.8,13.6-2.6,24.2-5.3c3.6-0.9,6.8-1.8,9.7-2.6
        c-0.8-0.4-1.5-0.8-2.1-1.3c-1.8-1.4-2.8-3.1-2.8-5.1c0-3.3,3.7-5.8,9.6-6.5c6.9-0.9,14.5,1,15.8,6.1c0.5,1.8-1.5,3-2.2,3.4
        c-1.6,1-4.3,2-7.4,3.1c14.3,1.7,37.5-0.5,55.7-4.9c0.8-0.2,1.6,0.3,1.8,1.1c0.2,0.8-0.3,1.6-1.1,1.8c-18.4,4.4-47.5,7.5-62.5,3.9
        c-7.1,2.1-14.7,4-17.9,4.8C418.1,104.5,411.8,105.4,409.2,105.4z M408.8,102.5L408.8,102.5z M454.8,84.1c-0.9,0-1.9,0.1-2.8,0.2
        c-4,0.5-7,2-7,3.5c0,1,0.6,1.9,1.7,2.7c1.2,0.9,2.9,1.6,5,2.2c7.4-2.3,11.6-4,12.7-5C463.4,85.3,459.2,84.1,454.8,84.1z M464.6,88.2
        C464.6,88.2,464.6,88.2,464.6,88.2C464.6,88.2,464.6,88.2,464.6,88.2z`)
    doc.circle(131.2, 145.4, 2.6)
    doc.fill(color)
    doc.restore()
    return doc
}