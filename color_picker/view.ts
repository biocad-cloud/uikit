/// <reference path="../../build/linq.d.ts" />

namespace uikit.color_picker.view {

    export interface IpolyMap {
        coords: number[];
        color: string;
        offsets: number[];
    }

    export function createPolyMap(containerId: string) {
        let map = $ts("<map>", { id: "colormap", name: "colormap" });
        let img = $ts("<img>", {
            style: "margin-right:2px;",
            src: colorMapBase64,
            usemap: "#colormap",
            alt: "colormap"
        });

        // <area style="cursor:pointer" 
        //       shape="poly"
        //       coords="63,0,72,4,72,15,63,19,54,15,54,4" 
        //       onclick="clickColor('#003366',-200,54)"
        //       onmouseover="mouseOverColor('#003366')" 
        //       alt="#003366">
        $from(poly)
            .Select(pdata => $ts("<area>", {
                style: "cursor:pointer",
                shape: "poly",
                coords: pdata.coords.join(","),
                alt: pdata.color,
                onclick: function () {
                    clickColor(pdata.color, pdata.offsets[0], pdata.offsets[1]);
                },
                onmouseover: function () {
                    mouseOverColor(pdata.color);
                }
            }))
            .ForEach(a => map.append(a));

        $ts(containerId).display(img).append(map);
        $ts(containerId).style.margin = "auto";
        $ts(containerId).style.width = "236px";
    }

    export const colorMapBase64: string = "";

    export const poly: IpolyMap[] = [
        { coords: [63, 0, 72, 4, 72, 15, 63, 19, 54, 15, 54, 4], color: '#003366', offsets: [-200, 54] },
        , { coords: [81, 0, 90, 4, 90, 15, 81, 19, 72, 15, 72, 4], color: '#336699', offsets: [-200, 72] },
        { coords: [99, 0, 108, 4, 108, 15, 99, 19, 90, 15, 90, 4], color: '#3366CC', offsets: [-200, 90] },
        , { coords: [117, 0, 126, 4, 126, 15, 117, 19, 108, 15, 108, 4], color: '#003399', offsets: [-200, 108] }, { coords: [135, 0, 144, 4, 144, 15, 135, 19, 126, 15, 126, 4], color: '#000099', offsets: [-200, 126] }
        , { coords: [153, 0, 162, 4, 162, 15, 153, 19, 144, 15, 144, 4], color: '#0000CC', offsets: [-200, 144] }, {
            coords: [171, 0, 180, 4, 180, 15, 171, 19, 162, 15, 162, 4], color: '#000066', offsets: [-200, 162]
        }, {
            coords: [54, 15, 63, 19, 63, 30, 54, 34, 45, 30, 45, 19], color: '#006666', offsets: [-185, 45]
        }, {
            coords: [72, 15, 81, 19, 81, 30, 72, 34, 63, 30, 63, 19], color: '#006699', offsets: [-185, 63]
        }
        , { coords: [90, 15, 99, 19, 99, 30, 90, 34, 81, 30, 81, 19], color: '#0099CC', offsets: [-185, 81] }
        , { coords: [108, 15, 117, 19, 117, 30, 108, 34, 99, 30, 99, 19], color: '#0066CC', offsets: [-185, 99] }
        , {
            coords: [126, 15, 135, 19, 135, 30, 126, 34, 117, 30, 117, 19], color: '#0033CC', offsets: [-185, 117]
        }
        , {
            coords: [144, 15, 153, 19, 153, 30, 144, 34, 135, 30, 135, 19], color: '#0000FF', offsets: [-185, 135]
        }
        , {
            coords: [162, 15, 171, 19, 171, 30, 162, 34, 153, 30, 153, 19], color: '#3333FF', offsets: [-185, 153]
        }
        , {
            coords: [180, 15, 189, 19, 189, 30, 180, 34, 171, 30, 171, 19], color: '#333399', offsets: [-185, 171]
        }
        , {
            coords: [45, 30, 54, 34, 54, 45, 45, 49, 36, 45, 36, 34], color: '#669999', offsets: [-170, 36]
        }
        , {
            coords: [63, 30, 72, 34, 72, 45, 63, 49, 54, 45, 54, 34], color: '#009999', offsets: [-170, 54]
        }
        , {
            coords: [81, 30, 90, 34, 90, 45, 81, 49, 72, 45, 72, 34], color: '#33CCCC', offsets: [-170, 72]
        }
        , {
            coords: [99, 30, 108, 34, 108, 45, 99, 49, 90, 45, 90, 34], color: '#00CCFF', offsets: [-170, 90]
        }
        , {
            coords: [117, 30, 126, 34, 126, 45, 117, 49, 108, 45, 108, 34], color: '#0099FF', offsets: [-170, 108]
        }
        , {
            coords: [135, 30, 144, 34, 144, 45, 135, 49, 126, 45, 126, 34], color: '#0066FF', offsets: [-170, 126]
        }
        , {
            coords: [153, 30, 162, 34, 162, 45, 153, 49, 144, 45, 144, 34], color: '#3366FF', offsets: [-170, 144]
        }
        , {
            coords: [171, 30, 180, 34, 180, 45, 171, 49, 162, 45, 162, 34], color: '#3333CC', offsets: [-170, 162]
        }
        , {
            coords: [189, 30, 198, 34, 198, 45, 189, 49, 180, 45, 180, 34], color: '#666699', offsets: [-170, 180]
        }
        , {
            coords: [36, 45, 45, 49, 45, 60, 36, 64, 27, 60, 27, 49], color: '#339966', offsets: [-155, 27]
        }
        , {
            coords: [54, 45, 63, 49, 63, 60, 54, 64, 45, 60, 45, 49], color: '#00CC99', offsets: [-155, 45]
        }
        , {
            coords: [72, 45, 81, 49, 81, 60, 72, 64, 63, 60, 63, 49], color: '#00FFCC', offsets: [-155, 63]
        }
        , {
            coords: [90, 45, 99, 49, 99, 60, 90, 64, 81, 60, 81, 49], color: '#00FFFF', offsets: [-155, 81]
        }
        , {
            coords: [108, 45, 117, 49, 117, 60, 108, 64, 99, 60, 99, 49], color: '#33CCFF', offsets: [-155, 99]
        }
        , {
            coords: [126, 45, 135, 49, 135, 60, 126, 64, 117, 60, 117, 49], color: '#3399FF', offsets: [-155, 117]
        }
        , {
            coords: [144, 45, 153, 49, 153, 60, 144, 64, 135, 60, 135, 49], color: '#6699FF', offsets: [-155, 135]
        }
        , {
            coords: [162, 45, 171, 49, 171, 60, 162, 64, 153, 60, 153, 49], color: '#6666FF', offsets: [-155, 153]
        }
        , {
            coords: [180, 45, 189, 49, 189, 60, 180, 64, 171, 60, 171, 49], color: '#6600FF', offsets: [-155, 171]
        }
        , {
            coords: [198, 45, 207, 49, 207, 60, 198, 64, 189, 60, 189, 49], color: '#6600CC', offsets: [-155, 189]
        }
        , {
            coords: [27, 60, 36, 64, 36, 75, 27, 79, 18, 75, 18, 64], color: '#339933', offsets: [-140, 18]
        }
        , {
            coords: [45, 60, 54, 64, 54, 75, 45, 79, 36, 75, 36, 64], color: '#00CC66', offsets: [-140, 36]
        }
        , {
            coords: [63, 60, 72, 64, 72, 75, 63, 79, 54, 75, 54, 64], color: '#00FF99', offsets: [-140, 54]
        }
        , {
            coords: [81, 60, 90, 64, 90, 75, 81, 79, 72, 75, 72, 64], color: '#66FFCC', offsets: [-140, 72]
        }
        , {
            coords: [99, 60, 108, 64, 108, 75, 99, 79, 90, 75, 90, 64], color: '#66FFFF', offsets: [-140, 90]
        }
        , {
            coords: [117, 60, 126, 64, 126, 75, 117, 79, 108, 75, 108, 64], color: '#66CCFF', offsets: [-140, 108]
        }
        , {
            coords: [135, 60, 144, 64, 144, 75, 135, 79, 126, 75, 126, 64], color: '#99CCFF', offsets: [-140, 126]
        }
        , {
            coords: [153, 60, 162, 64, 162, 75, 153, 79, 144, 75, 144, 64], color: '#9999FF', offsets: [-140, 144]
        }
        , {
            coords: [171, 60, 180, 64, 180, 75, 171, 79, 162, 75, 162, 64], color: '#9966FF', offsets: [-140, 162]
        }
        , {
            coords: [189, 60, 198, 64, 198, 75, 189, 79, 180, 75, 180, 64], color: '#9933FF', offsets: [-140, 180]
        }
        , {
            coords: [207, 60, 216, 64, 216, 75, 207, 79, 198, 75, 198, 64], color: '#9900FF', offsets: [-140, 198]
        }
        , {
            coords: [18, 75, 27, 79, 27, 90, 18, 94, 9, 90, 9, 79], color: '#006600', offsets: [-125, 9]
        }
        , {
            coords: [36, 75, 45, 79, 45, 90, 36, 94, 27, 90, 27, 79], color: '#00CC00', offsets: [-125, 27]
        }
        , {
            coords: [54, 75, 63, 79, 63, 90, 54, 94, 45, 90, 45, 79], color: '#00FF00', offsets: [-125, 45]
        }
        , {
            coords: [72, 75, 81, 79, 81, 90, 72, 94, 63, 90, 63, 79], color: '#66FF99', offsets: [-125, 63]
        }
        , {
            coords: [90, 75, 99, 79, 99, 90, 90, 94, 81, 90, 81, 79], color: '#99FFCC', offsets: [-125, 81]
        }
        , {
            coords: [108, 75, 117, 79, 117, 90, 108, 94, 99, 90, 99, 79], color: '#CCFFFF', offsets: [-125, 99]
        }
        , {
            coords: [126, 75, 135, 79, 135, 90, 126, 94, 117, 90, 117, 79], color: '#CCCCFF', offsets: [-125, 117]
        }
        , {
            coords: [144, 75, 153, 79, 153, 90, 144, 94, 135, 90, 135, 79], color: '#CC99FF', offsets: [-125, 135]
        }
        , {
            coords: [162, 75, 171, 79, 171, 90, 162, 94, 153, 90, 153, 79], color: '#CC66FF', offsets: [-125, 153]
        }
        , {
            coords: [180, 75, 189, 79, 189, 90, 180, 94, 171, 90, 171, 79], color: '#CC33FF', offsets: [-125, 171]
        }
        , {
            coords: [198, 75, 207, 79, 207, 90, 198, 94, 189, 90, 189, 79], color: '#CC00FF', offsets: [-125, 189]
        }
        , {
            coords: [216, 75, 225, 79, 225, 90, 216, 94, 207, 90, 207, 79], color: '#9900CC', offsets: [-125, 207]
        }
        , {
            coords: [9, 90, 18, 94, 18, 105, 9, 109, 0, 105, 0, 94], color: '#003300', offsets: [-110, 0]
        }
        , {
            coords: [27, 90, 36, 94, 36, 105, 27, 109, 18, 105, 18, 94], color: '#009933', offsets: [-110, 18]
        }
        , {
            coords: [45, 90, 54, 94, 54, 105, 45, 109, 36, 105, 36, 94], color: '#33CC33', offsets: [-110, 36]
        }
        , {
            coords: [63, 90, 72, 94, 72, 105, 63, 109, 54, 105, 54, 94], color: '#66FF66', offsets: [-110, 54]
        }
        , {
            coords: [81, 90, 90, 94, 90, 105, 81, 109, 72, 105, 72, 94], color: '#99FF99', offsets: [-110, 72]
        }
        , {
            coords: [99, 90, 108, 94, 108, 105, 99, 109, 90, 105, 90, 94], color: '#CCFFCC', offsets: [-110, 90]
        }
        , {
            coords: [117, 90, 126, 94, 126, 105, 117, 109, 108, 105, 108, 94], color: '#FFFFFF', offsets: [-110, 108]
        }
        , {
            coords: [135, 90, 144, 94, 144, 105, 135, 109, 126, 105, 126, 94], color: '#FFCCFF', offsets: [-110, 126]
        }
        , {
            coords: [153, 90, 162, 94, 162, 105, 153, 109, 144, 105, 144, 94], color: '#FF99FF', offsets: [-110, 144]
        }
        , {
            coords: [171, 90, 180, 94, 180, 105, 171, 109, 162, 105, 162, 94], color: '#FF66FF', offsets: [-110, 162]
        }
        , {
            coords: [189, 90, 198, 94, 198, 105, 189, 109, 180, 105, 180, 94], color: '#FF00FF', offsets: [-110, 180]
        }
        , {
            coords: [207, 90, 216, 94, 216, 105, 207, 109, 198, 105, 198, 94], color: '#CC00CC', offsets: [-110, 198]
        }
        , {
            coords: [225, 90, 234, 94, 234, 105, 225, 109, 216, 105, 216, 94], color: '#660066', offsets: [-110, 216]
        }
        , {
            coords: [18, 105, 27, 109, 27, 120, 18, 124, 9, 120, 9, 109], color: '#336600', offsets: [-95, 9]
        }
        , {
            coords: [36, 105, 45, 109, 45, 120, 36, 124, 27, 120, 27, 109], color: '#009900', offsets: [-95, 27]
        }
        , {
            coords: [54, 105, 63, 109, 63, 120, 54, 124, 45, 120, 45, 109], color: '#66FF33', offsets: [-95, 45]
        }
        , {
            coords: [72, 105, 81, 109, 81, 120, 72, 124, 63, 120, 63, 109], color: '#99FF66', offsets: [-95, 63]
        }
        , {
            coords: [90, 105, 99, 109, 99, 120, 90, 124, 81, 120, 81, 109], color: '#CCFF99', offsets: [-95, 81]
        }
        , {
            coords: [108, 105, 117, 109, 117, 120, 108, 124, 99, 120, 99, 109], color: '#FFFFCC', offsets: [-95, 99]
        }
        , {
            coords: [126, 105, 135, 109, 135, 120, 126, 124, 117, 120, 117, 109], color: '#FFCCCC', offsets: [-95, 117]
        }
        , {
            coords: [144, 105, 153, 109, 153, 120, 144, 124, 135, 120, 135, 109], color: '#FF99CC', offsets: [-95, 135]
        }
        , {
            coords: [162, 105, 171, 109, 171, 120, 162, 124, 153, 120, 153, 109], color: '#FF66CC', offsets: [-95, 153]
        }
        , {
            coords: [180, 105, 189, 109, 189, 120, 180, 124, 171, 120, 171, 109], color: '#FF33CC', offsets: [-95, 171]
        }
        , {
            coords: [198, 105, 207, 109, 207, 120, 198, 124, 189, 120, 189, 109], color: '#CC0099', offsets: [-95, 189]
        }
        , {
            coords: [216, 105, 225, 109, 225, 120, 216, 124, 207, 120, 207, 109], color: '#993399', offsets: [-95, 207]
        }
        , {
            coords: [27, 120, 36, 124, 36, 135, 27, 139, 18, 135, 18, 124], color: '#333300', offsets: [-80, 18]
        }
        , {
            coords: [45, 120, 54, 124, 54, 135, 45, 139, 36, 135, 36, 124], color: '#669900', offsets: [-80, 36]
        }
        , {
            coords: [63, 120, 72, 124, 72, 135, 63, 139, 54, 135, 54, 124], color: '#99FF33', offsets: [-80, 54]
        }
        , {
            coords: [81, 120, 90, 124, 90, 135, 81, 139, 72, 135, 72, 124], color: '#CCFF66', offsets: [-80, 72]
        }
        , {
            coords: [99, 120, 108, 124, 108, 135, 99, 139, 90, 135, 90, 124], color: '#FFFF99', offsets: [-80, 90]
        }
        , {
            coords: [117, 120, 126, 124, 126, 135, 117, 139, 108, 135, 108, 124], color: '#FFCC99', offsets: [-80, 108]
        }
        , {
            coords: [135, 120, 144, 124, 144, 135, 135, 139, 126, 135, 126, 124], color: '#FF9999', offsets: [-80, 126]
        }
        , {
            coords: [153, 120, 162, 124, 162, 135, 153, 139, 144, 135, 144, 124], color: '#FF6699', offsets: [-80, 144]
        }
        , {
            coords: [171, 120, 180, 124, 180, 135, 171, 139, 162, 135, 162, 124], color: '#FF3399', offsets: [-80, 162]
        }
        , {
            coords: [189, 120, 198, 124, 198, 135, 189, 139, 180, 135, 180, 124], color: '#CC3399', offsets: [-80, 180]
        }
        , {
            coords: [207, 120, 216, 124, 216, 135, 207, 139, 198, 135, 198, 124], color: '#990099', offsets: [-80, 198]
        }
        , {
            coords: [36, 135, 45, 139, 45, 150, 36, 154, 27, 150, 27, 139], color: '#666633', offsets: [-65, 27]
        }
        , {
            coords: [54, 135, 63, 139, 63, 150, 54, 154, 45, 150, 45, 139], color: '#99CC00', offsets: [-65, 45]
        }
        , {
            coords: [72, 135, 81, 139, 81, 150, 72, 154, 63, 150, 63, 139], color: '#CCFF33', offsets: [-65, 63]
        }
        , {
            coords: [90, 135, 99, 139, 99, 150, 90, 154, 81, 150, 81, 139], color: '#FFFF66', offsets: [-65, 81]
        }
        , {
            coords: [108, 135, 117, 139, 117, 150, 108, 154, 99, 150, 99, 139], color: '#FFCC66', offsets: [-65, 99]
        }
        , {
            coords: [126, 135, 135, 139, 135, 150, 126, 154, 117, 150, 117, 139], color: '#FF9966', offsets: [-65, 117]
        }
        , {
            coords: [144, 135, 153, 139, 153, 150, 144, 154, 135, 150, 135, 139], color: '#FF6666', offsets: [-65, 135]
        }
        , {
            coords: [162, 135, 171, 139, 171, 150, 162, 154, 153, 150, 153, 139], color: '#FF0066', offsets: [-65, 153]
        }
        , {
            coords: [180, 135, 189, 139, 189, 150, 180, 154, 171, 150, 171, 139], color: '#CC6699', offsets: [-65, 171]
        }
        , {
            coords: [198, 135, 207, 139, 207, 150, 198, 154, 189, 150, 189, 139], color: '#993366', offsets: [-65, 189]
        }
        , {
            coords: [45, 150, 54, 154, 54, 165, 45, 169, 36, 165, 36, 154], color: '#999966', offsets: [-50, 36]
        }
        , {
            coords: [63, 150, 72, 154, 72, 165, 63, 169, 54, 165, 54, 154], color: '#CCCC00', offsets: [-50, 54]
        }
        , {
            coords: [81, 150, 90, 154, 90, 165, 81, 169, 72, 165, 72, 154], color: '#FFFF00', offsets: [-50, 72]
        }
        , {
            coords: [99, 150, 108, 154, 108, 165, 99, 169, 90, 165, 90, 154], color: '#FFCC00', offsets: [-50, 90]
        }
        , {
            coords: [117, 150, 126, 154, 126, 165, 117, 169, 108, 165, 108, 154], color: '#FF9933', offsets: [-50, 108]
        }
        , {
            coords: [135, 150, 144, 154, 144, 165, 135, 169, 126, 165, 126, 154], color: '#FF6600', offsets: [-50, 126]
        }
        , {
            coords: [153, 150, 162, 154, 162, 165, 153, 169, 144, 165, 144, 154], color: '#FF5050', offsets: [-50, 144]
        }
        , {
            coords: [171, 150, 180, 154, 180, 165, 171, 169, 162, 165, 162, 154], color: '#CC0066', offsets: [-50, 162]
        }
        , {
            coords: [189, 150, 198, 154, 198, 165, 189, 169, 180, 165, 180, 154], color: '#660033', offsets: [-50, 180]
        }
        , {
            coords: [54, 165, 63, 169, 63, 180, 54, 184, 45, 180, 45, 169], color: '#996633', offsets: [-35, 45]
        }
        , {
            coords: [72, 165, 81, 169, 81, 180, 72, 184, 63, 180, 63, 169], color: '#CC9900', offsets: [-35, 63]
        }
        , {
            coords: [90, 165, 99, 169, 99, 180, 90, 184, 81, 180, 81, 169], color: '#FF9900', offsets: [-35, 81]
        }
        , {
            coords: [108, 165, 117, 169, 117, 180, 108, 184, 99, 180, 99, 169], color: '#CC6600', offsets: [-35, 99]
        }
        , {
            coords: [126, 165, 135, 169, 135, 180, 126, 184, 117, 180, 117, 169], color: '#FF3300', offsets: [-35, 117]
        }
        , {
            coords: [144, 165, 153, 169, 153, 180, 144, 184, 135, 180, 135, 169], color: '#FF0000', offsets: [-35, 135]
        }
        , {
            coords: [162, 165, 171, 169, 171, 180, 162, 184, 153, 180, 153, 169], color: '#CC0000', offsets: [-35, 153]
        }
        , {
            coords: [180, 165, 189, 169, 189, 180, 180, 184, 171, 180, 171, 169], color: '#990033', offsets: [-35, 171]
        }
        , {
            coords: [63, 180, 72, 184, 72, 195, 63, 199, 54, 195, 54, 184], color: '#663300', offsets: [-20, 54]
        }
        , {
            coords: [81, 180, 90, 184, 90, 195, 81, 199, 72, 195, 72, 184], color: '#996600', offsets: [-20, 72]
        }
        , {
            coords: [99, 180, 108, 184, 108, 195, 99, 199, 90, 195, 90, 184], color: '#CC3300', offsets: [-20, 90]
        }
        , {
            coords: [117, 180, 126, 184, 126, 195, 117, 199, 108, 195, 108, 184], color: '#993300', offsets: [-20, 108]
        }
        , {
            coords: [135, 180, 144, 184, 144, 195, 135, 199, 126, 195, 126, 184], color: '#990000', offsets: [-20, 126]
        }
        , {
            coords: [153, 180, 162, 184, 162, 195, 153, 199, 144, 195, 144, 184], color: '#800000', offsets: [-20, 144]
        }
        , {
            coords: [171, 180, 180, 184, 180, 195, 171, 199, 162, 195, 162, 184], color: '#993333', offsets: [-20, 162]
        }
    ];
}