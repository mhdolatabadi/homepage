#!/bin/bash
echo "Under Deploy..."
CE_USERNAME=mhdolatabadia
ls -lh >> lists.txt
tar -czvf home_page.tar.gz * 
sudo scp home_page.tar.gz $CE_USERNAME@ce.sharif.edu:public_html/
