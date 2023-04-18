import json
import sys

inputJsonFilenames= ['4p2ay64x5q4i3nl6pkilyk7vte','7ywigyol6e65nhaioelcsk3sbe','cv4lh6jh6m2spg6giu4wmz6adm','d3ln3atatu3onlpwbvlbf2s24u']
result='result.txt'

totalLinesRead = 0
totalLinesWithCountryCode = 0
for each in inputJsonFilenames:
    # fileTxt = each + '.txt'
    fileJson = each + '.json'
    with open(result, 'w') as f:
        try:
            for line in open(fileJson, 'r'):
                item = json.loads(line)
                Item = item["Item"]
                totalLinesRead += 1
                if "country_code" in Item:
                    totalLinesWithCountryCode += 1
                    if totalLinesWithCountryCode % 1000 == 0:
                        print('[totalLinesWithCountryCode Checkpoint]: ',totalLinesWithCountryCode)
                    f.write(str(Item['country_code']["S"])+ '\n')
                continue
        except (FileNotFoundError, IOError):
            print("Wrong file or file path: ", fileJson)
            sys.exit()
    print("[totalLinesRead]: ",totalLinesRead)
    print('[totalLinesWithCountryCode]: ',totalLinesWithCountryCode)