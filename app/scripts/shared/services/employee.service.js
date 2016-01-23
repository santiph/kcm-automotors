(function() {

    angular
    .module('kcmDashboardApp.services.employees', [])
    .factory('employeesFactory', employeesFactory);

    /* @ngInject */
    function employeesFactory($q, $http) {
        var factory = {
            getAll: getAllEmployees,
            getAllStatic: getAllStatic
        };

        return factory;
        function getAllEmployees() {

            return $http({
                method: 'JSONP',
                url: 'http://www.mocky.io/v2/56a2898d0f00008545a0f390'
            });
        }

        function getAllStatic() {
            return [
                {
                    "id": "56964846c3e66c664db59b34",
                    "name": {
                        "first": "Della",
                        "last": "Carrillo"
                    },
                    "email": "dellacarrillo@zilodyne.com",
                    "typeService": false,
                    "typeSales": true,
                    "sales": [
                    {
                        "date": "2015-06-18",
                        "revenue": "$2,564.91"
                    },
                    {
                        "date": "2015-12-30",
                        "revenue": "$3,410.06"
                    },
                    {
                        "date": "2015-08-04",
                        "revenue": "$3,184.56"
                    },
                    {
                        "date": "2015-04-02",
                        "revenue": "$1,320.41"
                    },
                    {
                        "date": "2015-08-16",
                        "revenue": "$1,710.40"
                    }
                    ]
                },
                {
                    "id": "56964846bfe6646421adf0a2",
                    "name": {
                        "first": "Oconnor",
                        "last": "Caldwell"
                    },
                    "email": "oconnorcaldwell@zilodyne.com",
                    "typeService": false,
                    "typeSales": true,
                    "sales": [
                    {
                        "date": "2015-08-17",
                        "revenue": "$2,111.70"
                    },
                    {
                        "date": "2015-05-16",
                        "revenue": "$3,159.23"
                    },
                    {
                        "date": "2015-01-17",
                        "revenue": "$3,708.84"
                    },
                    {
                        "date": "2016-01-13",
                        "revenue": "$1,128.51"
                    },
                    {
                        "date": "2015-07-18",
                        "revenue": "$2,890.30"
                    }
                    ]
                },
                {
                    "id": "56964846cbf9c93971038b42",
                    "name": {
                        "first": "Margaret",
                        "last": "Hamilton"
                    },
                    "email": "margarethamilton@zilodyne.com",
                    "typeService": false,
                    "typeSales": true,
                    "sales": [
                    {
                        "date": "2015-03-22",
                        "revenue": "$1,070.76"
                    },
                    {
                        "date": "2015-02-12",
                        "revenue": "$1,864.42"
                    },
                    {
                        "date": "2015-01-18",
                        "revenue": "$3,932.21"
                    },
                    {
                        "date": "2015-08-02",
                        "revenue": "$2,182.87"
                    },
                    {
                        "date": "2015-02-27",
                        "revenue": "$1,646.78"
                    },
                    {
                        "date": "2015-02-28",
                        "revenue": "$2,695.64"
                    },
                    {
                        "date": "2015-08-20",
                        "revenue": "$2,023.96"
                    },
                    {
                        "date": "2015-12-30",
                        "revenue": "$3,655.36"
                    },
                    {
                        "date": "2015-12-13",
                        "revenue": "$2,981.66"
                    },
                    {
                        "date": "2015-01-09",
                        "revenue": "$1,155.93"
                    },
                    {
                        "date": "2015-01-20",
                        "revenue": "$1,609.07"
                    }
                    ]
                },
                {
                    "id": "569648466216fb84f0bc263b",
                    "name": {
                        "first": "Sweeney",
                        "last": "Avila"
                    },
                    "email": "sweeneyavila@zilodyne.com",
                    "typeService": false,
                    "typeSales": true,
                    "sales": [
                    {
                        "date": "2015-05-12",
                        "revenue": "$2,669.65"
                    },
                    {
                        "date": "2015-09-13",
                        "revenue": "$2,309.50"
                    },
                    {
                        "date": "2015-02-27",
                        "revenue": "$3,202.50"
                    },
                    {
                        "date": "2016-01-02",
                        "revenue": "$3,886.95"
                    },
                    {
                        "date": "2015-10-04",
                        "revenue": "$1,958.67"
                    },
                    {
                        "date": "2015-09-14",
                        "revenue": "$1,909.93"
                    }
                    ]
                },
                {
                    "id": "56964846a07b32b74a12b144",
                    "name": {
                        "first": "Herminia",
                        "last": "Banks"
                    },
                    "email": "herminiabanks@zilodyne.com",
                    "typeService": false,
                    "typeSales": true,
                    "sales": [
                    {
                        "date": "2015-08-06",
                        "revenue": "$1,873.61"
                    },
                    {
                        "date": "2015-06-28",
                        "revenue": "$2,315.83"
                    },
                    {
                        "date": "2015-01-24",
                        "revenue": "$1,524.91"
                    },
                    {
                        "date": "2015-07-07",
                        "revenue": "$2,201.56"
                    },
                    {
                        "date": "2015-05-24",
                        "revenue": "$3,633.97"
                    }
                    ]
                },
                {
                    "id": "5696484600e893e64a622022",
                    "name": {
                        "first": "Lewis",
                        "last": "Mayer"
                    },
                    "email": "lewismayer@zilodyne.com",
                    "typeService": false,
                    "typeSales": true,
                    "sales": [
                    {
                        "date": "2015-04-02",
                        "revenue": "$3,026.76"
                    },
                    {
                        "date": "2015-11-08",
                        "revenue": "$2,242.22"
                    },
                    {
                        "date": "2015-10-20",
                        "revenue": "$3,542.13"
                    },
                    {
                        "date": "2015-03-28",
                        "revenue": "$1,571.66"
                    },
                    {
                        "date": "2015-09-26",
                        "revenue": "$3,115.93"
                    },
                    {
                        "date": "2015-11-29",
                        "revenue": "$3,741.74"
                    }
                    ]
                },
                {
                    "id": "569648460681b261b5c5f374",
                    "name": {
                        "first": "Hoffman",
                        "last": "James"
                    },
                    "email": "hoffmanjames@zilodyne.com",
                    "typeService": false,
                    "typeSales": true,
                    "sales": [
                    {
                        "date": "2015-12-20",
                        "revenue": "$1,904.51"
                    },
                    {
                        "date": "2015-04-14",
                        "revenue": "$1,719.72"
                    },
                    {
                        "date": "2015-06-19",
                        "revenue": "$1,600.91"
                    },
                    {
                        "date": "2015-08-04",
                        "revenue": "$3,827.47"
                    },
                    {
                        "date": "2015-04-03",
                        "revenue": "$1,437.04"
                    },
                    {
                        "date": "2015-08-15",
                        "revenue": "$2,039.25"
                    }
                    ]
                },
                {
                    "id": "56964846d8f7da133a45627f",
                    "name": {
                        "first": "Baker",
                        "last": "Chase"
                    },
                    "email": "bakerchase@zilodyne.com",
                    "typeService": false,
                    "typeSales": true,
                    "sales": [
                    {
                        "date": "2015-08-15",
                        "revenue": "$1,837.25"
                    },
                    {
                        "date": "2015-01-14",
                        "revenue": "$1,082.32"
                    },
                    {
                        "date": "2015-09-10",
                        "revenue": "$3,514.15"
                    },
                    {
                        "date": "2015-02-08",
                        "revenue": "$3,440.74"
                    },
                    {
                        "date": "2015-09-07",
                        "revenue": "$1,677.60"
                    },
                    {
                        "date": "2015-06-19",
                        "revenue": "$3,462.61"
                    },
                    {
                        "date": "2015-04-09",
                        "revenue": "$3,599.57"
                    },
                    {
                        "date": "2015-05-16",
                        "revenue": "$1,917.90"
                    }
                    ]
                },
                {
                    "id": "569648467ce453ebd5e24042",
                    "name": {
                        "first": "Deana",
                        "last": "Spears"
                    },
                    "email": "deanaspears@zilodyne.com",
                    "typeService": false,
                    "typeSales": true,
                    "sales": [
                    {
                        "date": "2016-01-12",
                        "revenue": "$1,108.71"
                    },
                    {
                        "date": "2015-09-12",
                        "revenue": "$3,581.75"
                    },
                    {
                        "date": "2015-06-20",
                        "revenue": "$3,216.79"
                    },
                    {
                        "date": "2015-12-02",
                        "revenue": "$2,248.72"
                    },
                    {
                        "date": "2015-11-21",
                        "revenue": "$2,909.47"
                    },
                    {
                        "date": "2015-11-26",
                        "revenue": "$2,836.35"
                    },
                    {
                        "date": "2015-07-15",
                        "revenue": "$1,973.71"
                    },
                    {
                        "date": "2015-11-21",
                        "revenue": "$2,101.17"
                    },
                    {
                        "date": "2015-02-26",
                        "revenue": "$2,343.03"
                    },
                    {
                        "date": "2015-05-29",
                        "revenue": "$1,646.69"
                    }
                    ]
                },
                {
                    "id": "56964846ab7d91830a9f4f16",
                    "name": {
                        "first": "Maldonado",
                        "last": "Maynard"
                    },
                    "email": "maldonadomaynard@zilodyne.com",
                    "typeService": false,
                    "typeSales": true,
                    "sales": [
                    {
                        "date": "2015-10-25",
                        "revenue": "$1,132.25"
                    },
                    {
                        "date": "2015-01-11",
                        "revenue": "$3,967.09"
                    },
                    {
                        "date": "2015-03-17",
                        "revenue": "$3,051.55"
                    }
                    ]
                },
                {
                    "id": "56964846ab3237041af96dbc",
                    "name": {
                        "first": "Mccoy",
                        "last": "Ellison"
                    },
                    "email": "mccoyellison@zilodyne.com",
                    "typeService": false,
                    "typeSales": true,
                    "sales": [
                    {
                        "date": "2015-09-16",
                        "revenue": "$1,885.55"
                    },
                    {
                        "date": "2015-04-26",
                        "revenue": "$2,243.40"
                    },
                    {
                        "date": "2015-10-24",
                        "revenue": "$3,700.19"
                    },
                    {
                        "date": "2015-03-19",
                        "revenue": "$3,669.05"
                    },
                    {
                        "date": "2016-01-01",
                        "revenue": "$1,836.01"
                    },
                    {
                        "date": "2015-06-13",
                        "revenue": "$1,679.14"
                    },
                    {
                        "date": "2015-10-07",
                        "revenue": "$3,957.21"
                    },
                    {
                        "date": "2016-01-02",
                        "revenue": "$2,782.37"
                    },
                    {
                        "date": "2015-03-10",
                        "revenue": "$3,318.98"
                    },
                    {
                        "date": "2015-11-27",
                        "revenue": "$1,182.40"
                    }
                    ]
                },
                {
                    "id": "569648464351e94d6bed6be4",
                    "name": {
                        "first": "Estrada",
                        "last": "Horton"
                    },
                    "email": "estradahorton@zilodyne.com",
                    "typeService": false,
                    "typeSales": true,
                    "sales": [
                    {
                        "date": "2015-03-23",
                        "revenue": "$1,169.97"
                    },
                    {
                        "date": "2015-08-02",
                        "revenue": "$3,426.03"
                    },
                    {
                        "date": "2015-06-29",
                        "revenue": "$3,076.79"
                    },
                    {
                        "date": "2015-08-12",
                        "revenue": "$3,148.73"
                    }
                    ]
                },
                {
                    "id": "56964846d3a7f4ed79169700",
                    "name": {
                        "first": "Lauren",
                        "last": "Walsh"
                    },
                    "email": "laurenwalsh@zilodyne.com",
                    "typeService": false,
                    "typeSales": true,
                    "sales": [
                    {
                        "date": "2015-05-12",
                        "revenue": "$3,022.08"
                    },
                    {
                        "date": "2015-07-15",
                        "revenue": "$1,894.94"
                    },
                    {
                        "date": "2015-09-07",
                        "revenue": "$2,337.35"
                    },
                    {
                        "date": "2015-06-08",
                        "revenue": "$3,578.93"
                    }
                    ]
                },
                {
                    "id": "5696484655dc3a1cbde9970a",
                    "name": {
                        "first": "Angelique",
                        "last": "Dickson"
                    },
                    "email": "angeliquedickson@zilodyne.com",
                    "typeService": false,
                    "typeSales": true,
                    "sales": [
                    {
                        "date": "2015-12-11",
                        "revenue": "$3,691.08"
                    },
                    {
                        "date": "2015-07-06",
                        "revenue": "$1,285.91"
                    },
                    {
                        "date": "2015-03-30",
                        "revenue": "$2,309.59"
                    },
                    {
                        "date": "2015-08-08",
                        "revenue": "$1,509.42"
                    }
                    ]
                },
                {
                    "id": "56964846a4d58e57ab3c1f65",
                    "name": {
                        "first": "Rose",
                        "last": "Juarez"
                    },
                    "email": "rosejuarez@zilodyne.com",
                    "typeService": false,
                    "typeSales": true,
                    "sales": [
                    {
                        "date": "2015-02-15",
                        "revenue": "$1,232.24"
                    },
                    {
                        "date": "2015-09-21",
                        "revenue": "$2,099.69"
                    },
                    {
                        "date": "2015-04-25",
                        "revenue": "$1,300.72"
                    },
                    {
                        "date": "2015-05-01",
                        "revenue": "$1,104.27"
                    },
                    {
                        "date": "2015-07-19",
                        "revenue": "$2,846.54"
                    },
                    {
                        "date": "2015-10-19",
                        "revenue": "$1,204.49"
                    },
                    {
                        "date": "2015-02-28",
                        "revenue": "$2,430.20"
                    },
                    {
                        "date": "2015-07-05",
                        "revenue": "$1,787.50"
                    },
                    {
                        "date": "2015-12-27",
                        "revenue": "$2,741.71"
                    },
                    {
                        "date": "2015-11-27",
                        "revenue": "$1,705.21"
                    }
                    ]
                },
                {
                    "id": "569648466d57970d11ebc594",
                    "name": {
                        "first": "Mia",
                        "last": "Kirkland"
                    },
                    "email": "miakirkland@zilodyne.com",
                    "typeService": false,
                    "typeSales": true,
                    "sales": [
                    {
                        "date": "2015-07-03",
                        "revenue": "$3,592.78"
                    },
                    {
                        "date": "2015-09-23",
                        "revenue": "$2,049.04"
                    },
                    {
                        "date": "2015-10-11",
                        "revenue": "$3,929.26"
                    },
                    {
                        "date": "2015-11-28",
                        "revenue": "$3,056.66"
                    },
                    {
                        "date": "2015-09-04",
                        "revenue": "$2,619.78"
                    },
                    {
                        "date": "2015-11-30",
                        "revenue": "$2,218.87"
                    },
                    {
                        "date": "2015-07-01",
                        "revenue": "$2,016.74"
                    }
                    ]
                },
                {
                    "id": "56964846b000eacc036fdfe3",
                    "name": {
                        "first": "Paul",
                        "last": "Mcintosh"
                    },
                    "email": "paulmcintosh@zilodyne.com",
                    "typeService": false,
                    "typeSales": true,
                    "sales": [
                    {
                        "date": "2015-03-09",
                        "revenue": "$2,447.23"
                    },
                    {
                        "date": "2015-11-14",
                        "revenue": "$1,957.70"
                    },
                    {
                        "date": "2015-12-19",
                        "revenue": "$3,845.54"
                    }
                    ]
                },
                {
                    "id": "56964846b3bc14e5ecffb87f",
                    "name": {
                        "first": "Sykes",
                        "last": "Atkinson"
                    },
                    "email": "sykesatkinson@zilodyne.com",
                    "typeService": false,
                    "typeSales": true,
                    "sales": [
                    {
                        "date": "2015-04-12",
                        "revenue": "$1,708.46"
                    },
                    {
                        "date": "2015-10-18",
                        "revenue": "$1,920.71"
                    },
                    {
                        "date": "2015-08-22",
                        "revenue": "$1,189.51"
                    },
                    {
                        "date": "2015-11-27",
                        "revenue": "$3,833.04"
                    },
                    {
                        "date": "2015-08-22",
                        "revenue": "$1,163.81"
                    },
                    {
                        "date": "2015-07-22",
                        "revenue": "$3,790.37"
                    },
                    {
                        "date": "2015-02-13",
                        "revenue": "$3,887.77"
                    }
                    ]
                },
                {
                    "id": "569648467b251d6b668595c2",
                    "name": {
                        "first": "Janie",
                        "last": "Reynolds"
                    },
                    "email": "janiereynolds@zilodyne.com",
                    "typeService": false,
                    "typeSales": true,
                    "sales": [
                    {
                        "date": "2015-03-12",
                        "revenue": "$2,295.76"
                    },
                    {
                        "date": "2015-07-02",
                        "revenue": "$3,772.11"
                    },
                    {
                        "date": "2015-05-05",
                        "revenue": "$3,305.16"
                    },
                    {
                        "date": "2015-11-10",
                        "revenue": "$2,272.47"
                    },
                    {
                        "date": "2015-08-25",
                        "revenue": "$3,196.69"
                    },
                    {
                        "date": "2015-03-03",
                        "revenue": "$1,782.08"
                    },
                    {
                        "date": "2015-02-17",
                        "revenue": "$1,684.66"
                    },
                    {
                        "date": "2015-09-10",
                        "revenue": "$2,567.04"
                    },
                    {
                        "date": "2015-12-27",
                        "revenue": "$2,928.37"
                    }
                    ]
                },
                {
                    "id": "569648468f41da891e61c74a",
                    "name": {
                        "first": "Anna",
                        "last": "Goodwin"
                    },
                    "email": "annagoodwin@zilodyne.com",
                    "typeService": false,
                    "typeSales": true,
                    "sales": [
                    {
                        "date": "2016-01-04",
                        "revenue": "$2,341.58"
                    },
                    {
                        "date": "2015-02-04",
                        "revenue": "$3,836.76"
                    },
                    {
                        "date": "2015-09-17",
                        "revenue": "$2,134.54"
                    },
                    {
                        "date": "2015-09-08",
                        "revenue": "$1,503.75"
                    },
                    {
                        "date": "2015-07-30",
                        "revenue": "$3,522.45"
                    },
                    {
                        "date": "2015-11-25",
                        "revenue": "$3,876.65"
                    },
                    {
                        "date": "2015-10-30",
                        "revenue": "$3,189.89"
                    }
                    ]
                },
                {
                    "id": "569648463b6b8723ed96f321",
                    "name": {
                        "first": "Cleo",
                        "last": "Buckner"
                    },
                    "email": "cleobuckner@zilodyne.com",
                    "typeService": false,
                    "typeSales": true,
                    "sales": [
                    {
                        "date": "2015-08-25",
                        "revenue": "$3,649.69"
                    },
                    {
                        "date": "2015-09-26",
                        "revenue": "$2,769.56"
                    },
                    {
                        "date": "2015-01-30",
                        "revenue": "$2,744.15"
                    },
                    {
                        "date": "2015-03-23",
                        "revenue": "$3,155.71"
                    },
                    {
                        "date": "2015-11-06",
                        "revenue": "$1,169.45"
                    },
                    {
                        "date": "2015-06-12",
                        "revenue": "$1,922.32"
                    }
                    ]
                },
                {
                    "id": "5696484624303c02d1baec63",
                    "name": {
                        "first": "Gay",
                        "last": "Berg"
                    },
                    "email": "gayberg@zilodyne.com",
                    "typeService": false,
                    "typeSales": true,
                    "sales": [
                    {
                        "date": "2015-04-27",
                        "revenue": "$1,519.86"
                    },
                    {
                        "date": "2015-04-25",
                        "revenue": "$3,079.38"
                    },
                    {
                        "date": "2015-12-25",
                        "revenue": "$2,174.36"
                    },
                    {
                        "date": "2015-02-02",
                        "revenue": "$1,347.08"
                    },
                    {
                        "date": "2015-12-26",
                        "revenue": "$1,150.67"
                    },
                    {
                        "date": "2015-09-10",
                        "revenue": "$2,341.29"
                    },
                    {
                        "date": "2015-05-15",
                        "revenue": "$3,732.47"
                    },
                    {
                        "date": "2015-01-18",
                        "revenue": "$1,511.05"
                    },
                    {
                        "date": "2015-06-03",
                        "revenue": "$3,073.30"
                    }
                    ]
                },
                {
                    "id": "5696484666ef07743bfe2221",
                    "name": {
                        "first": "Wanda",
                        "last": "Palmer"
                    },
                    "email": "wandapalmer@zilodyne.com",
                    "typeService": false,
                    "typeSales": true,
                    "sales": [
                    {
                        "date": "2015-05-17",
                        "revenue": "$3,495.74"
                    },
                    {
                        "date": "2015-06-09",
                        "revenue": "$3,586.98"
                    },
                    {
                        "date": "2015-10-09",
                        "revenue": "$2,117.36"
                    }
                    ]
                },
                {
                    "id": "569648468ec092a7028da3ac",
                    "name": {
                        "first": "Stein",
                        "last": "Barton"
                    },
                    "email": "steinbarton@zilodyne.com",
                    "typeService": false,
                    "typeSales": true,
                    "sales": [
                    {
                        "date": "2015-01-14",
                        "revenue": "$2,496.44"
                    },
                    {
                        "date": "2015-07-28",
                        "revenue": "$2,946.94"
                    },
                    {
                        "date": "2015-02-11",
                        "revenue": "$2,964.79"
                    }
                    ]
                },
                {
                    "id": "5696484646aae8db59910d89",
                    "name": {
                        "first": "Joseph",
                        "last": "Dillon"
                    },
                    "email": "josephdillon@zilodyne.com",
                    "typeService": false,
                    "typeSales": true,
                    "sales": [
                    {
                        "date": "2015-04-18",
                        "revenue": "$2,675.37"
                    },
                    {
                        "date": "2015-01-18",
                        "revenue": "$2,768.97"
                    },
                    {
                        "date": "2015-05-01",
                        "revenue": "$2,018.24"
                    },
                    {
                        "date": "2015-07-05",
                        "revenue": "$2,304.77"
                    },
                    {
                        "date": "2015-10-17",
                        "revenue": "$1,570.09"
                    },
                    {
                        "date": "2015-03-28",
                        "revenue": "$3,546.95"
                    },
                    {
                        "date": "2015-12-31",
                        "revenue": "$3,986.30"
                    },
                    {
                        "date": "2015-10-03",
                        "revenue": "$2,208.58"
                    },
                    {
                        "date": "2015-07-23",
                        "revenue": "$2,941.79"
                    },
                    {
                        "date": "2015-04-21",
                        "revenue": "$3,994.44"
                    }
                    ]
                },
                {
                    "id": "56964846872717f351b2a452",
                    "name": {
                        "first": "Laurie",
                        "last": "Walters"
                    },
                    "email": "lauriewalters@zilodyne.com",
                    "typeService": false,
                    "typeSales": true,
                    "sales": [
                    {
                        "date": "2015-05-29",
                        "revenue": "$3,051.58"
                    },
                    {
                        "date": "2016-01-06",
                        "revenue": "$2,690.97"
                    },
                    {
                        "date": "2015-10-21",
                        "revenue": "$2,937.65"
                    },
                    {
                        "date": "2015-05-02",
                        "revenue": "$3,942.58"
                    },
                    {
                        "date": "2015-11-05",
                        "revenue": "$2,090.71"
                    },
                    {
                        "date": "2015-02-22",
                        "revenue": "$3,174.62"
                    },
                    {
                        "date": "2015-06-09",
                        "revenue": "$3,419.79"
                    },
                    {
                        "date": "2015-01-09",
                        "revenue": "$2,899.34"
                    },
                    {
                        "date": "2015-11-15",
                        "revenue": "$3,329.42"
                    }
                    ]
                },
                {
                    "id": "5696491de527d27c85ad0c04",
                    "name": {
                        "first": "Patrice",
                        "last": "Rodriquez"
                    },
                    "email": "patricerodriquez@zilodyne.com",
                    "typeService": true,
                    "typeSales": false,
                    "repairs": [
                    {
                        "date": "2015-03-12",
                        "cars": 13
                    },
                    {
                        "date": "2015-03-25",
                        "cars": 30
                    },
                    {
                        "date": "2015-04-27",
                        "cars": 3
                    },
                    {
                        "date": "2015-04-24",
                        "cars": 29
                    },
                    {
                        "date": "2015-10-25",
                        "cars": 28
                    }
                    ]
                },
                {
                    "id": "5696491d3051ecb7630734f3",
                    "name": {
                        "first": "Annmarie",
                        "last": "Alvarado"
                    },
                    "email": "annmariealvarado@zilodyne.com",
                    "typeService": true,
                    "typeSales": false,
                    "repairs": [
                    {
                        "date": "2015-07-25",
                        "cars": 12
                    },
                    {
                        "date": "2015-10-23",
                        "cars": 28
                    },
                    {
                        "date": "2015-03-23",
                        "cars": 28
                    },
                    {
                        "date": "2015-07-02",
                        "cars": 28
                    },
                    {
                        "date": "2015-02-27",
                        "cars": 16
                    },
                    {
                        "date": "2015-04-09",
                        "cars": 4
                    },
                    {
                        "date": "2015-12-04",
                        "cars": 30
                    },
                    {
                        "date": "2015-05-08",
                        "cars": 6
                    }
                    ]
                },
                {
                    "id": "5696491d14c09d14ab06cac7",
                    "name": {
                        "first": "Klein",
                        "last": "Lindsey"
                    },
                    "email": "kleinlindsey@zilodyne.com",
                    "typeService": true,
                    "typeSales": false,
                    "repairs": [
                    {
                        "date": "2015-02-26",
                        "cars": 3
                    },
                    {
                        "date": "2015-11-07",
                        "cars": 4
                    },
                    {
                        "date": "2015-11-10",
                        "cars": 15
                    },
                    {
                        "date": "2015-02-27",
                        "cars": 19
                    },
                    {
                        "date": "2015-07-11",
                        "cars": 30
                    }
                    ]
                },
                {
                    "id": "5696491d293d6544a8371af6",
                    "name": {
                        "first": "Ana",
                        "last": "Byrd"
                    },
                    "email": "anabyrd@zilodyne.com",
                    "typeService": true,
                    "typeSales": false,
                    "repairs": [
                    {
                        "date": "2015-01-22",
                        "cars": 3
                    },
                    {
                        "date": "2015-06-11",
                        "cars": 8
                    },
                    {
                        "date": "2015-01-20",
                        "cars": 9
                    },
                    {
                        "date": "2015-11-17",
                        "cars": 12
                    },
                    {
                        "date": "2015-11-06",
                        "cars": 3
                    }
                    ]
                },
                {
                    "id": "5696491deea3f2012b8ecbeb",
                    "name": {
                        "first": "Conway",
                        "last": "Harmon"
                    },
                    "email": "conwayharmon@zilodyne.com",
                    "typeService": true,
                    "typeSales": false,
                    "repairs": [
                    {
                        "date": "2015-02-26",
                        "cars": 13
                    },
                    {
                        "date": "2015-02-17",
                        "cars": 9
                    },
                    {
                        "date": "2015-12-26",
                        "cars": 10
                    },
                    {
                        "date": "2015-12-21",
                        "cars": 26
                    }
                    ]
                },
                {
                    "id": "5696491d902469c214530ab0",
                    "name": {
                        "first": "Bird",
                        "last": "Snyder"
                    },
                    "email": "birdsnyder@zilodyne.com",
                    "typeService": true,
                    "typeSales": false,
                    "repairs": [
                    {
                        "date": "2015-07-16",
                        "cars": 7
                    },
                    {
                        "date": "2015-09-01",
                        "cars": 10
                    },
                    {
                        "date": "2015-01-30",
                        "cars": 13
                    },
                    {
                        "date": "2015-11-02",
                        "cars": 13
                    },
                    {
                        "date": "2015-06-07",
                        "cars": 3
                    },
                    {
                        "date": "2015-09-07",
                        "cars": 28
                    }
                    ]
                },
                {
                    "id": "5696491de52d1b75e6ff3b14",
                    "name": {
                        "first": "Morton",
                        "last": "Rollins"
                    },
                    "email": "mortonrollins@zilodyne.com",
                    "typeService": true,
                    "typeSales": false,
                    "repairs": [
                    {
                        "date": "2015-02-14",
                        "cars": 21
                    },
                    {
                        "date": "2015-01-21",
                        "cars": 15
                    },
                    {
                        "date": "2015-10-06",
                        "cars": 28
                    }
                    ]
                },
                {
                    "id": "5696491d4b806fccde24fd10",
                    "name": {
                        "first": "Katharine",
                        "last": "Schwartz"
                    },
                    "email": "katharineschwartz@zilodyne.com",
                    "typeService": true,
                    "typeSales": false,
                    "repairs": [
                    {
                        "date": "2015-01-13",
                        "cars": 5
                    },
                    {
                        "date": "2015-12-21",
                        "cars": 23
                    },
                    {
                        "date": "2015-12-07",
                        "cars": 16
                    }
                    ]
                },
                {
                    "id": "5696491ddbcc39545a013c44",
                    "name": {
                        "first": "Velazquez",
                        "last": "Warner"
                    },
                    "email": "velazquezwarner@zilodyne.com",
                    "typeService": true,
                    "typeSales": false,
                    "repairs": [
                    {
                        "date": "2015-12-20",
                        "cars": 3
                    },
                    {
                        "date": "2015-03-23",
                        "cars": 4
                    },
                    {
                        "date": "2015-06-24",
                        "cars": 4
                    },
                    {
                        "date": "2015-07-31",
                        "cars": 24
                    }
                    ]
                },
                {
                    "id": "5696491d9d7d111ee267356d",
                    "name": {
                        "first": "Phelps",
                        "last": "Cook"
                    },
                    "email": "phelpscook@zilodyne.com",
                    "typeService": true,
                    "typeSales": false,
                    "repairs": [
                    {
                        "date": "2015-01-28",
                        "cars": 8
                    },
                    {
                        "date": "2015-11-18",
                        "cars": 18
                    },
                    {
                        "date": "2015-12-09",
                        "cars": 8
                    }
                    ]
                },
                {
                    "id": "5696491de6a6f0bb3b741f5e",
                    "name": {
                        "first": "Celeste",
                        "last": "Landry"
                    },
                    "email": "celestelandry@zilodyne.com",
                    "typeService": true,
                    "typeSales": false,
                    "repairs": [
                    {
                        "date": "2015-07-09",
                        "cars": 20
                    },
                    {
                        "date": "2015-09-20",
                        "cars": 6
                    },
                    {
                        "date": "2015-10-08",
                        "cars": 4
                    },
                    {
                        "date": "2015-07-12",
                        "cars": 17
                    },
                    {
                        "date": "2015-10-26",
                        "cars": 11
                    },
                    {
                        "date": "2015-04-01",
                        "cars": 21
                    },
                    {
                        "date": "2015-06-27",
                        "cars": 10
                    },
                    {
                        "date": "2015-12-12",
                        "cars": 15
                    },
                    {
                        "date": "2015-04-29",
                        "cars": 11
                    },
                    {
                        "date": "2015-01-06",
                        "cars": 2
                    }
                    ]
                },
                {
                    "id": "5696491d6e7cfcaba06f920b",
                    "name": {
                        "first": "Aisha",
                        "last": "Talley"
                    },
                    "email": "aishatalley@zilodyne.com",
                    "typeService": true,
                    "typeSales": false,
                    "repairs": [
                    {
                        "date": "2015-07-10",
                        "cars": 6
                    },
                    {
                        "date": "2015-07-23",
                        "cars": 9
                    },
                    {
                        "date": "2015-11-09",
                        "cars": 18
                    },
                    {
                        "date": "2015-02-23",
                        "cars": 25
                    },
                    {
                        "date": "2015-06-16",
                        "cars": 19
                    }
                    ]
                },
                {
                    "id": "5696491d22a7b1683dca22e1",
                    "name": {
                        "first": "Schroeder",
                        "last": "Wiley"
                    },
                    "email": "schroederwiley@zilodyne.com",
                    "typeService": true,
                    "typeSales": false,
                    "repairs": [
                    {
                        "date": "2015-09-11",
                        "cars": 20
                    },
                    {
                        "date": "2015-05-19",
                        "cars": 21
                    },
                    {
                        "date": "2015-08-18",
                        "cars": 17
                    },
                    {
                        "date": "2015-04-04",
                        "cars": 13
                    },
                    {
                        "date": "2015-08-06",
                        "cars": 19
                    },
                    {
                        "date": "2015-02-26",
                        "cars": 16
                    },
                    {
                        "date": "2015-03-06",
                        "cars": 20
                    },
                    {
                        "date": "2015-08-08",
                        "cars": 9
                    },
                    {
                        "date": "2015-01-26",
                        "cars": 8
                    },
                    {
                        "date": "2015-03-28",
                        "cars": 23
                    },
                    {
                        "date": "2015-03-18",
                        "cars": 4
                    }
                    ]
                },
                {
                    "id": "5696491d1e878350c6ed37dc",
                    "name": {
                        "first": "Catherine",
                        "last": "Merritt"
                    },
                    "email": "catherinemerritt@zilodyne.com",
                    "typeService": true,
                    "typeSales": false,
                    "repairs": [
                    {
                        "date": "2015-10-18",
                        "cars": 28
                    },
                    {
                        "date": "2015-09-08",
                        "cars": 25
                    },
                    {
                        "date": "2015-03-10",
                        "cars": 16
                    },
                    {
                        "date": "2015-04-30",
                        "cars": 16
                    },
                    {
                        "date": "2015-05-31",
                        "cars": 18
                    },
                    {
                        "date": "2015-06-12",
                        "cars": 23
                    },
                    {
                        "date": "2015-01-28",
                        "cars": 5
                    },
                    {
                        "date": "2015-06-25",
                        "cars": 3
                    },
                    {
                        "date": "2015-12-23",
                        "cars": 18
                    }
                    ]
                },
                {
                    "id": "5696491da3774fe26e10b79f",
                    "name": {
                        "first": "Barber",
                        "last": "Sampson"
                    },
                    "email": "barbersampson@zilodyne.com",
                    "typeService": true,
                    "typeSales": false,
                    "repairs": [
                    {
                        "date": "2015-01-24",
                        "cars": 8
                    },
                    {
                        "date": "2015-03-11",
                        "cars": 17
                    },
                    {
                        "date": "2015-07-21",
                        "cars": 11
                    },
                    {
                        "date": "2015-04-30",
                        "cars": 12
                    },
                    {
                        "date": "2015-02-06",
                        "cars": 25
                    },
                    {
                        "date": "2015-11-30",
                        "cars": 19
                    },
                    {
                        "date": "2016-01-01",
                        "cars": 16
                    },
                    {
                        "date": "2015-03-20",
                        "cars": 10
                    },
                    {
                        "date": "2015-08-18",
                        "cars": 16
                    }
                    ]
                },
                {
                    "id": "5696491d6e48df7efd72da6b",
                    "name": {
                        "first": "Ayala",
                        "last": "Baldwin"
                    },
                    "email": "ayalabaldwin@zilodyne.com",
                    "typeService": true,
                    "typeSales": false,
                    "repairs": [
                    {
                        "date": "2015-11-28",
                        "cars": 20
                    },
                    {
                        "date": "2015-12-14",
                        "cars": 3
                    },
                    {
                        "date": "2015-04-22",
                        "cars": 13
                    },
                    {
                        "date": "2015-02-23",
                        "cars": 17
                    },
                    {
                        "date": "2015-05-24",
                        "cars": 9
                    },
                    {
                        "date": "2015-02-06",
                        "cars": 10
                    }
                    ]
                },
                {
                    "id": "5696491d3a281627e93b966a",
                    "name": {
                        "first": "Chasity",
                        "last": "Contreras"
                    },
                    "email": "chasitycontreras@zilodyne.com",
                    "typeService": true,
                    "typeSales": false,
                    "repairs": [
                    {
                        "date": "2015-02-26",
                        "cars": 8
                    },
                    {
                        "date": "2015-02-19",
                        "cars": 2
                    },
                    {
                        "date": "2015-06-19",
                        "cars": 29
                    },
                    {
                        "date": "2015-05-29",
                        "cars": 30
                    },
                    {
                        "date": "2016-01-12",
                        "cars": 30
                    },
                    {
                        "date": "2015-03-25",
                        "cars": 3
                    },
                    {
                        "date": "2015-10-30",
                        "cars": 22
                    },
                    {
                        "date": "2015-04-01",
                        "cars": 30
                    },
                    {
                        "date": "2015-07-24",
                        "cars": 21
                    },
                    {
                        "date": "2015-05-03",
                        "cars": 27
                    },
                    {
                        "date": "2015-03-26",
                        "cars": 26
                    }
                    ]
                },
                {
                    "id": "5696491dbad8a2c080818f6a",
                    "name": {
                        "first": "Pearl",
                        "last": "Rowland"
                    },
                    "email": "pearlrowland@zilodyne.com",
                    "typeService": true,
                    "typeSales": false,
                    "repairs": [
                    {
                        "date": "2015-05-14",
                        "cars": 6
                    },
                    {
                        "date": "2015-05-01",
                        "cars": 8
                    },
                    {
                        "date": "2015-06-10",
                        "cars": 10
                    },
                    {
                        "date": "2015-12-02",
                        "cars": 21
                    }
                    ]
                },
                {
                    "id": "5696491d7662291037bee919",
                    "name": {
                        "first": "Tammie",
                        "last": "Hatfield"
                    },
                    "email": "tammiehatfield@zilodyne.com",
                    "typeService": true,
                    "typeSales": false,
                    "repairs": [
                    {
                        "date": "2015-09-18",
                        "cars": 8
                    },
                    {
                        "date": "2015-03-15",
                        "cars": 24
                    },
                    {
                        "date": "2015-08-10",
                        "cars": 8
                    },
                    {
                        "date": "2015-09-25",
                        "cars": 25
                    },
                    {
                        "date": "2015-12-12",
                        "cars": 21
                    },
                    {
                        "date": "2015-10-28",
                        "cars": 12
                    },
                    {
                        "date": "2015-03-03",
                        "cars": 21
                    },
                    {
                        "date": "2015-01-27",
                        "cars": 6
                    }
                    ]
                },
                {
                    "id": "5696491dc52e9a2916c1594a",
                    "name": {
                        "first": "Santiago",
                        "last": "Hester"
                    },
                    "email": "santiagohester@zilodyne.com",
                    "typeService": true,
                    "typeSales": false,
                    "repairs": [
                    {
                        "date": "2015-12-06",
                        "cars": 3
                    },
                    {
                        "date": "2015-08-23",
                        "cars": 7
                    },
                    {
                        "date": "2015-01-24",
                        "cars": 19
                    },
                    {
                        "date": "2015-11-16",
                        "cars": 14
                    },
                    {
                        "date": "2015-12-03",
                        "cars": 28
                    },
                    {
                        "date": "2015-11-13",
                        "cars": 17
                    }
                    ]
                },
                {
                    "id": "5696491d6aed9369fbc7e1b3",
                    "name": {
                        "first": "Mccarty",
                        "last": "Dean"
                    },
                    "email": "mccartydean@zilodyne.com",
                    "typeService": true,
                    "typeSales": false,
                    "repairs": [
                    {
                        "date": "2015-12-30",
                        "cars": 8
                    },
                    {
                        "date": "2015-11-14",
                        "cars": 9
                    },
                    {
                        "date": "2015-11-16",
                        "cars": 18
                    },
                    {
                        "date": "2015-10-30",
                        "cars": 25
                    },
                    {
                        "date": "2015-11-25",
                        "cars": 10
                    },
                    {
                        "date": "2016-01-02",
                        "cars": 28
                    },
                    {
                        "date": "2015-07-22",
                        "cars": 13
                    },
                    {
                        "date": "2015-10-15",
                        "cars": 7
                    },
                    {
                        "date": "2015-05-15",
                        "cars": 12
                    },
                    {
                        "date": "2015-10-14",
                        "cars": 27
                    }
                    ]
                },
                {
                    "id": "5696491dc2ba27f182c528a9",
                    "name": {
                        "first": "Erma",
                        "last": "Park"
                    },
                    "email": "ermapark@zilodyne.com",
                    "typeService": true,
                    "typeSales": false,
                    "repairs": [
                    {
                        "date": "2015-07-23",
                        "cars": 28
                    },
                    {
                        "date": "2015-06-24",
                        "cars": 12
                    },
                    {
                        "date": "2015-10-06",
                        "cars": 13
                    },
                    {
                        "date": "2015-06-20",
                        "cars": 16
                    },
                    {
                        "date": "2015-05-13",
                        "cars": 21
                    },
                    {
                        "date": "2015-06-25",
                        "cars": 6
                    },
                    {
                        "date": "2015-09-24",
                        "cars": 23
                    },
                    {
                        "date": "2015-09-15",
                        "cars": 8
                    },
                    {
                        "date": "2015-12-21",
                        "cars": 16
                    },
                    {
                        "date": "2015-11-18",
                        "cars": 23
                    }
                    ]
                },
                {
                    "id": "5696491da6765ed6fa01a082",
                    "name": {
                        "first": "Brittany",
                        "last": "Morrison"
                    },
                    "email": "brittanymorrison@zilodyne.com",
                    "typeService": true,
                    "typeSales": false,
                    "repairs": [
                    {
                        "date": "2015-05-15",
                        "cars": 9
                    },
                    {
                        "date": "2015-10-04",
                        "cars": 28
                    },
                    {
                        "date": "2015-12-15",
                        "cars": 23
                    },
                    {
                        "date": "2015-02-05",
                        "cars": 6
                    },
                    {
                        "date": "2015-02-16",
                        "cars": 22
                    },
                    {
                        "date": "2015-04-24",
                        "cars": 16
                    }
                    ]
                },
                {
                    "id": "5696491d79a122eac131c9e7",
                    "name": {
                        "first": "Talley",
                        "last": "Franks"
                    },
                    "email": "talleyfranks@zilodyne.com",
                    "typeService": true,
                    "typeSales": false,
                    "repairs": [
                    {
                        "date": "2015-12-18",
                        "cars": 7
                    },
                    {
                        "date": "2015-03-10",
                        "cars": 18
                    },
                    {
                        "date": "2015-07-27",
                        "cars": 24
                    },
                    {
                        "date": "2015-11-04",
                        "cars": 17
                    },
                    {
                        "date": "2015-10-08",
                        "cars": 13
                    }
                    ]
                },
                {
                    "id": "5696491ddcd1ecf4a04de061",
                    "name": {
                        "first": "England",
                        "last": "Estrada"
                    },
                    "email": "englandestrada@zilodyne.com",
                    "typeService": true,
                    "typeSales": false,
                    "repairs": [
                    {
                        "date": "2015-06-17",
                        "cars": 16
                    },
                    {
                        "date": "2015-07-23",
                        "cars": 5
                    },
                    {
                        "date": "2015-11-07",
                        "cars": 26
                    }
                    ]
                },
                {
                    "id": "5696491da70e1c6fcba25fa0",
                    "name": {
                        "first": "Ray",
                        "last": "Roberts"
                    },
                    "email": "rayroberts@zilodyne.com",
                    "typeService": true,
                    "typeSales": false,
                    "repairs": [
                    {
                        "date": "2015-07-28",
                        "cars": 11
                    },
                    {
                        "date": "2015-02-16",
                        "cars": 17
                    },
                    {
                        "date": "2015-02-21",
                        "cars": 17
                    },
                    {
                        "date": "2015-12-13",
                        "cars": 18
                    },
                    {
                        "date": "2015-05-29",
                        "cars": 6
                    },
                    {
                        "date": "2015-02-09",
                        "cars": 13
                    },
                    {
                        "date": "2015-06-07",
                        "cars": 30
                    },
                    {
                        "date": "2015-05-27",
                        "cars": 5
                    },
                    {
                        "date": "2015-11-11",
                        "cars": 18
                    },
                    {
                        "date": "2015-03-09",
                        "cars": 17
                    },
                    {
                        "date": "2015-08-16",
                        "cars": 28
                    }
                    ]
                },
                {
                    "id": "5696491d030459e5a4541340",
                    "name": {
                        "first": "Whitehead",
                        "last": "Grimes"
                    },
                    "email": "whiteheadgrimes@zilodyne.com",
                    "typeService": true,
                    "typeSales": false,
                    "repairs": [
                    {
                        "date": "2015-04-06",
                        "cars": 23
                    },
                    {
                        "date": "2015-07-27",
                        "cars": 3
                    },
                    {
                        "date": "2015-03-31",
                        "cars": 2
                    },
                    {
                        "date": "2015-08-23",
                        "cars": 24
                    },
                    {
                        "date": "2015-01-21",
                        "cars": 23
                    }
                    ]
                },
                {
                    "id": "5696491dd412bd97a9fa2b22",
                    "name": {
                        "first": "Deanne",
                        "last": "Larson"
                    },
                    "email": "deannelarson@zilodyne.com",
                    "typeService": true,
                    "typeSales": false,
                    "repairs": [
                    {
                        "date": "2015-09-13",
                        "cars": 22
                    },
                    {
                        "date": "2015-02-02",
                        "cars": 13
                    },
                    {
                        "date": "2015-07-18",
                        "cars": 13
                    },
                    {
                        "date": "2015-01-11",
                        "cars": 12
                    }
                    ]
                },
                {
                    "id": "5696491d7b9fc79f4f237575",
                    "name": {
                        "first": "Lynn",
                        "last": "Edwards"
                    },
                    "email": "lynnedwards@zilodyne.com",
                    "typeService": true,
                    "typeSales": false,
                    "repairs": [
                    {
                        "date": "2015-02-21",
                        "cars": 23
                    },
                    {
                        "date": "2015-02-08",
                        "cars": 27
                    },
                    {
                        "date": "2015-09-02",
                        "cars": 26
                    }
                    ]
                },
                {
                    "id": "5696491d795bfcb6a81250de",
                    "name": {
                        "first": "Sherrie",
                        "last": "Glass"
                    },
                    "email": "sherrieglass@zilodyne.com",
                    "typeService": true,
                    "typeSales": false,
                    "repairs": [
                    {
                        "date": "2015-03-02",
                        "cars": 17
                    },
                    {
                        "date": "2015-06-20",
                        "cars": 5
                    },
                    {
                        "date": "2015-10-31",
                        "cars": 30
                    },
                    {
                        "date": "2015-06-13",
                        "cars": 9
                    },
                    {
                        "date": "2015-10-14",
                        "cars": 8
                    },
                    {
                        "date": "2015-09-08",
                        "cars": 5
                    },
                    {
                        "date": "2015-08-11",
                        "cars": 30
                    }
                    ]
                },
                {
                    "id": "5696491d62cc56b2cff8becd",
                    "name": {
                        "first": "Townsend",
                        "last": "Kim"
                    },
                    "email": "townsendkim@zilodyne.com",
                    "typeService": true,
                    "typeSales": false,
                    "repairs": [
                    {
                        "date": "2015-06-07",
                        "cars": 21
                    },
                    {
                        "date": "2015-07-15",
                        "cars": 16
                    },
                    {
                        "date": "2015-06-11",
                        "cars": 25
                    },
                    {
                        "date": "2015-03-02",
                        "cars": 22
                    }
                    ]
                },
                {
                    "id": "5696491de14337147a41bd0a",
                    "name": {
                        "first": "Barr",
                        "last": "Dominguez"
                    },
                    "email": "barrdominguez@zilodyne.com",
                    "typeService": true,
                    "typeSales": false,
                    "repairs": [
                    {
                        "date": "2015-12-10",
                        "cars": 2
                    },
                    {
                        "date": "2015-02-01",
                        "cars": 10
                    },
                    {
                        "date": "2015-01-14",
                        "cars": 17
                    },
                    {
                        "date": "2015-10-03",
                        "cars": 16
                    },
                    {
                        "date": "2015-01-19",
                        "cars": 30
                    }
                    ]
                },
                {
                    "id": "5696491deaa2ecca9a14a4d4",
                    "name": {
                        "first": "Jacquelyn",
                        "last": "Cox"
                    },
                    "email": "jacquelyncox@zilodyne.com",
                    "typeService": true,
                    "typeSales": false,
                    "repairs": [
                    {
                        "date": "2015-06-30",
                        "cars": 12
                    },
                    {
                        "date": "2015-11-28",
                        "cars": 17
                    },
                    {
                        "date": "2015-05-07",
                        "cars": 20
                    },
                    {
                        "date": "2015-11-02",
                        "cars": 9
                    },
                    {
                        "date": "2015-12-05",
                        "cars": 28
                    },
                    {
                        "date": "2015-03-15",
                        "cars": 11
                    },
                    {
                        "date": "2015-03-16",
                        "cars": 28
                    },
                    {
                        "date": "2016-01-09",
                        "cars": 11
                    },
                    {
                        "date": "2015-10-10",
                        "cars": 29
                    },
                    {
                        "date": "2015-07-31",
                        "cars": 13
                    }
                    ]
                }
            ];
        }
    }
})();